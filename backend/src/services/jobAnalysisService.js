import { model } from "./geminiService.js";
import { jobMatchPrompt } from "../utils/jobMatchPrompt.js";

const cleanResponse = (text) => {
  return text
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();
};

export const analyzeJobDescription = async (
  resume,
  jd
) => {

  const prompt = jobMatchPrompt(
    resume,
    jd
  );

  const result =
    await model.generateContent(prompt);

  let text =
    result.response.text();

  text = cleanResponse(text);

  return JSON.parse(text);

};