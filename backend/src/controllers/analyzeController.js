import fs from "fs";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

import { analyzeResume } from "../services/geminiService.js";
import { generateFallbackAnalysis } from "../utils/fallbackAnalysis.js";

export const analyzeResumeController = async (req, res) => {
  let filePath = "";

  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "Resume file is required",
      });
    }

    filePath = req.file.path;

    if (!fs.existsSync(filePath)) {
      return res.status(400).json({
        success: false,
        message: "Uploaded file not found.",
      });
    }

    // Read uploaded PDF
    const data = new Uint8Array(
      fs.readFileSync(filePath)
    );

    // Load PDF
    const pdf = await pdfjsLib.getDocument({
      data,
    }).promise;

    let resumeText = "";

    // Extract text from every page
    for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {
      const page = await pdf.getPage(pageNo);

      const content = await page.getTextContent();

      resumeText +=
        content.items
          .map((item) => item.str)
          .join(" ") + "\n";
    }

    resumeText = resumeText.trim();

    if (!resumeText) {
      throw new Error("Unable to extract text from resume.");
    }

    console.log("Resume Extracted Successfully");

    let analysis;

    try {
      // ===== Gemini AI =====
      analysis = await analyzeResume(resumeText);

      if (!analysis) {
        throw new Error(
          "Gemini returned empty response."
        );
      }

      console.log(
        "Gemini AI analysis completed."
      );
    } catch (error) {
      console.warn(
        "Gemini unavailable. Using Dynamic Fallback."
      );

      console.error(error.message);

      // ===== Dynamic ATS Analysis =====
      analysis =
        generateFallbackAnalysis(
          resumeText
        );
    }

    return res.json({
      success: true,
      source:
        analysis.source || "gemini",
      analysis,
    });
  } catch (error) {
    console.error(
      "Analyze Controller Error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to analyze resume.",
    });
  } finally {
    // Always delete uploaded file
    if (
      filePath &&
      fs.existsSync(filePath)
    ) {
      try {
        fs.unlinkSync(filePath);
      } catch (cleanupError) {
        console.error(
          "File Cleanup Error:",
          cleanupError.message
        );
      }
    }
  }
};