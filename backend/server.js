/* global process */

import dotenv from "dotenv";


import express from "express";
import cors from "cors";

import analyzeRoutes
from "./src/routes/analyze.js";


import jobAnalysisRoutes 
from "./src/routes/jobAnalysis.js";

dotenv.config();

console.log("Gemini Key:", process.env.GEMINI_API_KEY);
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://your-frontend.vercel.app",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use(
"/api/analyze",
analyzeRoutes
);

app.use(
"/api",
jobAnalysisRoutes
);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Resume Analyzer API Running",
  });
});

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});