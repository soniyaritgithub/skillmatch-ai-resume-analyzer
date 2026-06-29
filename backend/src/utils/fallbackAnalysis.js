import { resumeAnalyzer } from "./resumeAnalyzer.js";

export const generateFallbackAnalysis = (resumeText = "") => {
  const analysis = resumeAnalyzer(resumeText);

  return {
    ...analysis,

    source: "fallback",

    aiEnabled: false,

    message:
      "AI analysis is temporarily unavailable. A dynamic ATS report has been generated based on your resume.",

    generatedAt: new Date().toISOString(),
  };
};