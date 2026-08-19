import Settings from "../models/settings.modal.js";

const defaultSettings = {
  title: "A1 Code",
  logo: "",
  navColor: "#3b82f6",
  navbarColor: "#1e3a8a",
  navText: "#ffffff",
  footerColor: "#ffffff",
  footerTextColor: "#475569",
  footer: "Ready-made projects for faster launches.",
};

export const save_Settings = async (req, res) => {
  try {
    const {
      title,
      navColor,
      navbarColor,
      navText,
      footerColor,
      footerTextColor,
      footer,
    } = req.body;

    const settingsPayload = {
      title,
      navColor,
      navbarColor,
      navText,
      footerColor,
      footerTextColor,
      footer,
    };

    Object.keys(settingsPayload).forEach((key) => {
      if (settingsPayload[key] === undefined) {
        delete settingsPayload[key];
      }
    });

    if (req.file) {
      settingsPayload.logo = `/uploads/${req.file.filename}`;
    }

    // Update or create if doesn't exist
    const updatedSettings = await Settings.findOneAndUpdate(
      {},
      { $set: settingsPayload },
      { upsert: true, new: true },
    );
    res
      .status(200)
      .json({ message: "Settings updated successfully", updatedSettings });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const get_Settings = async (req, res) => {
  try {
    const settings = await Settings.findOne();
    if (!settings) {
      return res.status(200).json(defaultSettings);
    }
    res.status(200).json({ ...defaultSettings, ...settings.toObject() });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
