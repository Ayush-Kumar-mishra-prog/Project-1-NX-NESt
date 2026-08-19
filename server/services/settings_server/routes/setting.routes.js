import express from "express";
import upload from "../middlewares/multer.js";
import isLoggedIn from "@a1code/common-auth/middleware/auth.middleware.js";
import authorize from "@a1code/common-auth/middleware/role.middleware.js";
import {
  save_Settings,
  get_Settings,
} from "../controllers/settings.controller.js";
const router = express.Router();

router.get("/get-settings", get_Settings);
router.post(
  "/settings-save",
  isLoggedIn,
  authorize("admin"),
  upload.single("logo"),
  save_Settings,
);

export default router;
