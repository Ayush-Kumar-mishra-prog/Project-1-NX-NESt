import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/generatetoken.js";

export const register = async (req, res) => {
  const { username, email, password, full_name, role } = req.body;

  try {
    if (!username || !email || !password || !full_name) {
      return res
        .status(400)
        .json({ message: "All fields are required username" });
    }
    if (!email || !password || !full_name) {
      return res.status(400).json({ message: "All fields are required email" });
    }
    if (!password || !full_name) {
      return res
        .status(400)
        .json({ message: "All fields are required password" });
    }
    if (!full_name) {
      return res
        .status(400)
        .json({ message: "All fields are required full_name" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hasshedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      username,
      email,
      password: hasshedPassword,
      full_name,
      role,
    });
    if (user) {
      const token = generateToken(user);
      res.cookie("accessToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 7 * 24 * 60 * 60 * 1000,
        path: "/",
      });
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        full_name: user.full_name,
        role: user.role,
      });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (role && user.role !== role) {
      return res.status(403).json({ message: "Access Denied" });
    }

    if (user.role === "seller" && user.status !== "approved") {
      return res
        .status(403)
        .json({ message: "Seller account is not approved yet" });
    }

    const token = generateToken(user);
    res.cookie("accessToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: "/",
    });
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      full_name: user.full_name,
      role: user.role,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// single user get controller function

export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      full_name: user.full_name,
      role: user.role,
      token: generateToken(user),
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  res.clearCookie("accessToken", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
  });
  res.status(200).json({ message: "Logged out successfully" });
};

export const sellerLoginRequest = async (req, res) => {
  const {
    full_name,
    username,
    email,
    password,
    discription,
    role = "seller",
    status,
  } = req.body;
  try {
    if (!full_name || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are requried" });
    }
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "Seller already registered" });
    }
    const salt = await bcrypt.genSalt(10);
    const hasshedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      username,
      email,
      password: hasshedPassword,
      full_name,
      role,
      status,
    });
    if (user) {
      return res.status(200).json({ message: "Request send to admin" });
    } else {
      return res.status(400).json({ message: "Failed to register" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

// protected functions only for admin

export const getSellerData = async (req, res) => {
  try {
    const data = await User.find({ role: "seller" }).select(
      "-password",
    );
    if (data && data.length > 0) {
      return res.status(200).json({ data });
    } else {
      return res.status(404).json({ message: "No request for seller" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateSellerStatus = async (req, res) => {
  try {
    const { id } = req.body;
    const { status } = req.body;
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    user.status = status;
    await user.save();
    return res.status(200).json({ message: "Status updated successfully" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
