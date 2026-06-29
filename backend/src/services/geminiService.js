/* global process */

import { GoogleGenerativeAI } from "@google/generative-ai";
import { ATS_PROMPT } from "../prompts/atsPrompt.js";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

export const model =
  genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
  });

const REQUIRED_FIELDS = [
  "atsScore",
  "grammar",
  "keywords",
  "skills",
  "formatting",
  "readability",
  "strengths",
  "weaknesses",
  "missingKeywords",
  "suggestions",
  "recruiterInsights",
  "grade",
];

const validateAnalysis = (analysis) => {
  for (const field of REQUIRED_FIELDS) {
    if (!(field in analysis)) {
      throw new Error(`Missing field: ${field}`);
    }
  }

  return analysis;
};

const cleanGeminiResponse = (text) => {
  if (!text) return "";

  return text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();
};

const repairJson = (text) => {
  try {
  return JSON.parse(text);
} catch {
  // Ignore and try repairing JSON
}

try {
  const first = text.indexOf("{");
  const last = text.lastIndexOf("}");

  if (first !== -1 && last !== -1) {
    return JSON.parse(
      text.substring(first, last + 1)
    );
  }
} catch {
  // Ignore
}

  throw new Error("Invalid JSON returned by Gemini.");
};

export const analyzeResume = async (
  resumeText
) => {
  if (!resumeText?.trim()) {
    throw new Error(
      "Resume text is empty."
    );
  }

try {

  const finalPrompt = `
${ATS_PROMPT}

Resume:

${resumeText}
`;

  const timeout = new Promise((_, reject) =>
    setTimeout(
      () =>
        reject(
          new Error(
            "Gemini request timeout."
          )
        ),
      60000
    )
  );

  const result = await Promise.race([
    model.generateContent(finalPrompt),
    timeout,
  ]);

  const response = await result.response;

  let text = response.text();

  text = cleanGeminiResponse(text);

  if (!text) {
    throw new Error(
      "Gemini returned an empty response."
    );
  }

  console.log("Gemini Raw Response:");
  console.log(text);

  const analysis = repairJson(text);

  validateAnalysis(analysis);

  return analysis;

} catch (error) {

  console.error(
    "Gemini Analysis Error:",
    error.message
  );

  throw error;

}
};