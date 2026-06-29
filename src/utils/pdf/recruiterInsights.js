import { COLORS, FONT } from "./theme";
import { PAGE } from "./layout";

export const drawRecruiterInsights = (
  doc,
  analysis,
  currentY
) => {

  const recruiterInsights =
    analysis?.recruiterInsights || {};

  const strengths =
  Array.isArray(recruiterInsights?.strengths) &&
  recruiterInsights.strengths.length
    ? recruiterInsights.strengths
    : analysis?.strengths || [];

  const improvements =
  Array.isArray(recruiterInsights?.improvements) &&
  recruiterInsights.improvements.length
    ? recruiterInsights.improvements
    : analysis?.suggestions || [];

  const interviewProbability =
  recruiterInsights?.interviewProbability ||
  analysis?.interviewChance ||
  "Not Available";

 const roles =
  Array.isArray(recruiterInsights?.recommendedRoles) &&
  recruiterInsights.recommendedRoles.length
    ? recruiterInsights.recommendedRoles
    : analysis?.recommendedRole
    ? [analysis.recommendedRole]
    : [];

  // Dynamic Height
  const cardHeight =
    40 +
    strengths.length * 8 +
    improvements.length * 8 +
    roles.length * 8;

  if (currentY + cardHeight + 20 > 270) {
    doc.addPage();
    currentY = PAGE.margin;
  }

  // Heading
  doc.setFont("helvetica", "bold");
  doc.setFontSize(FONT.subHeading);
  doc.setTextColor(...COLORS.black);

  doc.text(
    "Recruiter Insights",
    PAGE.margin,
    currentY
  );

  currentY += 10;

  // Card
  doc.setFillColor(...COLORS.gray100);

  doc.roundedRect(
    PAGE.margin,
    currentY,
    PAGE.width - PAGE.margin * 2,
    cardHeight,
    4,
    4,
    "F"
  );

  let y = currentY + 10;

  // Strengths
  doc.setFont("helvetica", "normal");
  doc.setFontSize(FONT.body);
  doc.setTextColor(...COLORS.success);

  strengths.forEach((item) => {

    doc.text(
      "[OK] " + item,
      PAGE.margin + 6,
      y
    );

    y += 8;

  });

  // Improvements
  doc.setTextColor(...COLORS.warning);

  improvements.forEach((item) => {

    doc.text(
      "[!] " + item,
      PAGE.margin + 6,
      y
    );

    y += 8;

  });

  // Interview Probability
  doc.setFont("helvetica", "bold");
  doc.setTextColor(...COLORS.black);

  doc.text(
    "Interview Probability: " +
      interviewProbability,
    PAGE.margin + 6,
    y + 2
  );

  y += 12;

  // Roles
  doc.setFont("helvetica", "bold");

  doc.text(
    "Recommended Roles",
    PAGE.margin + 6,
    y
  );

  y += 8;

  doc.setFont("helvetica", "normal");

  roles.forEach((role) => {

    doc.text(
      "- " + role,
      PAGE.margin + 12,
      y
    );

    y += 8;

  });

  currentY += cardHeight + 10;

  doc.setDrawColor(...COLORS.gray300);

  doc.line(
    PAGE.margin,
    currentY,
    PAGE.width - PAGE.margin,
    currentY
  );

  currentY += 10;

  return currentY;
};