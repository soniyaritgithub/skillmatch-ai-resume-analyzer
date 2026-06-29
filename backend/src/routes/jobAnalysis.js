import express from "express";
import { analyzeJob } from "../controllers/jobAnalysisController.js";

const router = express.Router();

router.post("/job-analysis", analyzeJob);

export default router;