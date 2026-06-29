/* global process */
import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

console.log("Gemini Key:", process.env.GEMINI_API_KEY);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function analyzeResume(text) {
  const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

  const result = await model.generateContent(`
Analyze this resume.

Return ONLY valid JSON.

{
  "atsScore": number,
  "keywords": number,
  "grammar": number,
  "skills": number,
  "missingKeywords": [],
  "suggestions": []
}

Resume:
${text}
`);

  return result.response.text();
}