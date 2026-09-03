import Category from "../models/category.modal.js";

export const createCategory = async (req, res) => {
  const { full_name, username, role, category, date } = req.body;
  try {
    // if (!full_name) {
    //   return res.status(400).json({ message: "full_name fields are required" });
    // } else if (!username) {
    //   return res.status(400).json({ message: "username fields are required" });
    // } else if (!role) {
    //   return res.status(400).json({ message: "role fields are required" });
    // } else if (!category) {
    //   return res.status(400).json({ message: "Cat fields are required" });
    // }
    const exist = await Category.findOne({ category });

    if (!exist) {
      const createdCategory = await Category.create({
        full_name: full_name,
        username: username,
        role: role,
        category: category,
        date: date,
      });

      return res
        .status(201)
        .json({
          message: "Category created successfully",
          category: createdCategory,
        });
    } else {
      return res.status(400).json({ message: "Category already exist" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const getCategroy = async (req, res) => {
  try {
    const data = await Category.find();
    if (data) {
      res.status(200).json(data);
    } else {
      res.status(401).json({ message: "No category available right now" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};
