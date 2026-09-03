import mongoose from "mongoose";
const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    discription: {
      type: String,
    },
    date: {
      type: String,
    },
    price: {
      type: String,
    },
    category: {
      type: String,
    },
    project_image: {
      type: String,
    },
    project_file: {
      type: String,
    },
    show_image: {
      type: String,
    },
    brief_description: {
      type: String,
    },
  },
  { timestamps: true },
);

const Project = mongoose.model("Project",projectSchema);
export default Project
