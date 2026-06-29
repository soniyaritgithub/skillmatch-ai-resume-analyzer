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

    // Read uploaded PDF
    const data = new Uint8Array(
      fs.readFileSync(filePath)
    );

    // Load PDF
    const pdf = await pdfjsLib.getDocument({
      data,
    }).promise;

    let resumeText = "";

    // Extract text from all pages
    for (
      let pageNo = 1;
      pageNo <= pdf.numPages;
      pageNo++
    ) {
      const page = await pdf.getPage(pageNo);

      const content =
        await page.getTextContent();

      resumeText +=
        content.items
          .map((item) => item.str)
          .join(" ") + "\n";
    }

    console.log("Resume Extracted Successfully");

    // Delete uploaded file
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    let analysis;

    try {
      // ===== Gemini AI =====
      analysis = await analyzeResume(resumeText);

      // Gemini failed / returned null
      if (!analysis) {
        throw new Error(
          "Gemini returned empty response."
        );
      }

      console.log(
        "Gemini AI analysis completed."
      );
    } catch (geminiError) {
      console.warn(
        "Gemini unavailable. Using Dynamic Fallback."
      );

      console.error(geminiError.message);

      // ===== Dynamic ATS Report =====
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
    console.error(error);

    if (
      filePath &&
      fs.existsSync(filePath)
    ) {
      fs.unlinkSync(filePath);
    }

    return res.status(500).json({
      success: false,
      message:
        error.message ||
        "Failed to analyze resume.",
    });
  }
};