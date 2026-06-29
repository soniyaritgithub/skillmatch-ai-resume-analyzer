const REQUIRED_SKILLS = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "next",
  "node",
  "express",
  "mongodb",
  "mysql",
  "postgresql",
  "sql",
  "python",
  "django",
  "flask",
  "java",
  "spring",
  "spring boot",
  "git",
  "github",
  "docker",
  "kubernetes",
  "aws",
  "azure",
  "gcp",
  "rest api",
  "jwt",
  "tailwind",
  "bootstrap",
  "redux",
  "firebase",
  "linux",
  "jenkins",
  "ci/cd",
  "postman",
];

const CERTIFICATIONS = [
  "aws",
  "google",
  "microsoft",
  "oracle",
  "cisco",
  "ibm",
  "azure",
  "meta",
  "coursera",
  "udemy",
];

export const resumeAnalyzer = (resumeText = "") => {
  const text = resumeText.toLowerCase();

  const foundSkills = REQUIRED_SKILLS.filter((skill) =>
    text.includes(skill)
  );

  const missingKeywords = REQUIRED_SKILLS.filter(
    (skill) => !text.includes(skill)
  ).slice(0, 10);

  let score = 35;

  score += foundSkills.length * 2;

  if (text.includes("project")) score += 8;
  if (text.includes("intern")) score += 8;
  if (text.includes("experience")) score += 10;
  if (text.includes("education")) score += 5;
  if (text.includes("github")) score += 5;
  if (text.includes("linkedin")) score += 5;
  if (text.includes("portfolio")) score += 5;
  if (text.includes("certification")) score += 5;

  score = Math.min(98, score);

  let grade = "D";

  if (score >= 95) grade = "A+";
  else if (score >= 90) grade = "A";
  else if (score >= 80) grade = "B+";
  else if (score >= 70) grade = "B";
  else if (score >= 60) grade = "C";

  let interviewChance = "Low";

  if (score >= 90) interviewChance = "Very High";
  else if (score >= 80) interviewChance = "High";
  else if (score >= 70) interviewChance = "Medium";

  let recommendedRole = "Software Developer";

  if (
    text.includes("react") &&
    text.includes("node")
  ) {
    recommendedRole = "Full Stack Developer";
  } else if (
    text.includes("django") ||
    text.includes("flask")
  ) {
    recommendedRole = "Python Backend Developer";
  } else if (
    text.includes("spring")
  ) {
    recommendedRole = "Java Backend Developer";
  } else if (
    text.includes("cyber") ||
    text.includes("soc") ||
    text.includes("siem")
  ) {
    recommendedRole = "SOC Analyst";
  } else if (
    text.includes("android")
  ) {
    recommendedRole = "Android Developer";
  }

  const strengths = [];

  if (text.includes("react"))
    strengths.push("React Development");

  if (text.includes("node"))
    strengths.push("Node.js Development");

  if (text.includes("django"))
    strengths.push("Django Backend");

  if (text.includes("project"))
    strengths.push("Hands-on Projects");

  if (text.includes("github"))
    strengths.push("GitHub Portfolio");

  if (text.includes("rest"))
    strengths.push("REST API Development");

  if (text.includes("mysql"))
    strengths.push("Database Skills");

  while (strengths.length < 4) {
    strengths.push("Good technical foundation");
  }

  const weaknesses = [];

  if (!text.includes("github"))
    weaknesses.push("Add GitHub profile");

  if (!text.includes("linkedin"))
    weaknesses.push("Add LinkedIn profile");

  if (!text.includes("portfolio"))
    weaknesses.push("Add Portfolio website");

  if (!text.includes("certification"))
    weaknesses.push("Add certifications");

  if (!text.includes("achievement"))
    weaknesses.push("Mention measurable achievements");

  if (!text.includes("intern"))
    weaknesses.push("Include internship experience");

  while (weaknesses.length < 4) {
    weaknesses.push("Improve resume formatting");
  }

  const suggestions = [];

  if (!text.includes("github"))
    suggestions.push("Add your GitHub profile.");

  if (!text.includes("linkedin"))
    suggestions.push("Include your LinkedIn profile.");

  if (!text.includes("portfolio"))
    suggestions.push("Add your portfolio website.");

  if (!text.includes("certification"))
    suggestions.push("Mention relevant certifications.");

  if (!text.includes("achievement"))
    suggestions.push("Quantify achievements with numbers.");

  if (!text.includes("rest api"))
    suggestions.push("Mention REST API experience.");

  if (!text.includes("docker"))
    suggestions.push("Add Docker knowledge if applicable.");

  while (suggestions.length < 6) {
    suggestions.push("Customize your resume for every job description.");
  }

  const certifications = CERTIFICATIONS.filter((item) =>
    text.includes(item)
  );

  const education =
    text.match(
      /(b\.?tech|bachelor|be|bca|mca|m\.?tech|master|bsc|msc)/i
    )?.[0] || "Not Found";

  const experience =
    text.match(
      /(\d+)\+?\s*(years?|yrs?|months?)/i
    )?.[0] || "Fresher";

  const links = {
    linkedin:
      text.match(
        /https?:\/\/(www\.)?linkedin\.com\/[^\s]+/i
      )?.[0] || "Not Found",

    github:
      text.match(
        /https?:\/\/(www\.)?github\.com\/[^\s]+/i
      )?.[0] || "Not Found",

    portfolio:
      text.match(
        /https?:\/\/(?!.*linkedin)(?!.*github)[^\s]+/i
      )?.[0] || "Not Found",
  };

  return {
    atsScore: score,

    grade,

    grammar: Math.min(98, score - 2),

    keywords: Math.min(
      100,
      Math.round(
        (foundSkills.length / REQUIRED_SKILLS.length) * 100
      )
    ),

    skills: Math.min(100, score - 3),

    formatting: Math.min(100, score - 1),

    readability: Math.min(100, score - 4),

    atsReady: score >= 70,

    interviewChance,

    recommendedRole,

    strengths,

    weaknesses,

    missingKeywords,

    suggestions,

    recruiterInsights:
      score >= 80
        ? "Resume has a good chance of passing ATS screening."
        : "Resume should be improved before applying.",

    experience,

    education,

    certifications,

    professionalLinks: links,

    extractedSkills: foundSkills,
  };
};