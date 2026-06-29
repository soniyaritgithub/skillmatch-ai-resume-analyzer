import express from "express";

import { upload } from "../config/multerConfig.js";

import {
  analyzeResumeController
} from "../controllers/analyzeController.js";

const router = express.Router();

router.post(
  "/",
  upload.single("resume"),
  analyzeResumeController
);

export default router;