import { COLORS, FONT } from "./theme";
import { PAGE } from "./layout";

export const drawCoverPage = (
  doc,
  analysis,
  file
) => {

// ===============================
// Background
// ===============================

doc.setFillColor(...COLORS.primary);

doc.rect(
  0,
  0,
  PAGE.width,
  PAGE.height,
  "F"
);

// ===============================
// Main Title
// ===============================

doc.setTextColor(...COLORS.white);

doc.setFontSize(FONT.title + 8);

doc.setFont(
  "helvetica",
  "bold"
);

doc.text(
  "AI Resume ATS Report",
  PAGE.margin,
  40
);

// ===============================
// Subtitle
// ===============================

doc.setFontSize(FONT.subHeading);

doc.setFont(
  "helvetica",
  "normal"
);

doc.text(
  "Professional Resume Analysis",
  PAGE.margin,
  52
);


// ===============================
// ATS Badge
// ===============================

const badgeX = PAGE.width - 65;

doc.setFillColor(...COLORS.white);

doc.roundedRect(
  145,
  35,
  45,
  24,
  5,
  5,
  "F"
);

doc.setTextColor(...COLORS.primary);

doc.setFontSize(10);

doc.text(
  "ATS SCORE",
  badgeX + 9,
  44
);

doc.setFontSize(22);

doc.setFont(
  "helvetica",
  "bold"
);

doc.text(
  `${analysis.atsScore}%`,
  badgeX + 11,
  55
);

doc.setDrawColor(
  255,
  255,
  255
);

doc.setLineWidth(0.5);

doc.line(
  PAGE.margin,
  70,
  PAGE.width - PAGE.margin,
  70
);

doc.setFontSize(FONT.small);

doc.text(
  "Generated using SkillMatch AI ATS Analyzer",
  PAGE.margin,
  186
);

// ===============================
// Resume Name
// ===============================

doc.setTextColor(...COLORS.white);

doc.setFontSize(FONT.heading);

doc.setFont(
  "helvetica",
  "bold"
);

doc.text(
  "Resume",
  PAGE.margin,
  90
);

// ===============================
// Generated Date
// ===============================

doc.setFontSize(FONT.body);

doc.text(
  `Generated : ${new Date().toLocaleString()}`,
  PAGE.margin,
  112
);

// ===============================
// Description
// ===============================

const description =
  "This report provides an AI-powered ATS analysis of your resume. It evaluates your resume against industry hiring standards, identifies missing keywords, highlights strengths, and provides actionable recommendations to improve your interview selection chances.";

const descriptionLines =
  doc.splitTextToSize(
    description,
    165
  );

doc.setFontSize(FONT.body);

doc.text(
  descriptionLines,
  PAGE.margin,
  132
);

doc.setDrawColor(...COLORS.white);

doc.setLineWidth(0.4);

doc.line(
  PAGE.margin,
  175,
  PAGE.width - PAGE.margin,
  175
);

doc.setFont(
  "helvetica",
  "normal"
);

doc.setFontSize(FONT.subHeading);

doc.text(
  file?.name || "Resume.pdf",
  PAGE.margin,
  100
);


doc.addPage();

};

