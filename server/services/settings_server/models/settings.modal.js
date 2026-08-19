import mongoose from "mongoose";
const settingsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    logo: {
      type: String,
    },
    navColor: {
      type: String,
    },
    navbarColor: {
      type: String,
    },
    navText: {
      type: String,
    },
    footerColor: {
      type: String,
    },
    footerTextColor: {
      type: String,
    },
    footer: {
      type: String,
    },
  },
  { timestamps: true },
);

const Settings = mongoose.model("Settings", settingsSchema);

export default Settings;
