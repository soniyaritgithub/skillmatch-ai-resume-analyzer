import { COLORS, FONT } from "./theme";
import { PAGE } from "./layout";

export const drawSummaryBox = (
  doc,
  analysis,
  currentY
) => {

  // ===============================
  // Estimated Height Check
  // ===============================

  const estimatedHeight = 85;

  if (currentY + estimatedHeight > 270) {
    doc.addPage();
    currentY = PAGE.margin;
  }

  // ===============================
  // Heading
  // ===============================

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(
    FONT.subHeading
  );

  doc.setTextColor(
    ...COLORS.black
  );

  doc.text(
    "Resume Summary",
    PAGE.margin,
    currentY
  );

  currentY += 10;

  // ===============================
  // Summary Card
  // ===============================

  doc.setFillColor(
    ...COLORS.gray100
  );

  const cardHeight = 72;

doc.roundedRect(
  PAGE.margin,
  currentY,
  170,
  cardHeight,
  4,
  4,
  "F"
);

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(
    FONT.body
  );

  doc.setTextColor(
    ...COLORS.black
  );

  // ===============================
  // Badge Function
  // ===============================

  const drawBadge = (
  text,
  color,
  y
) => {

  doc.setFillColor(...color);

  doc.roundedRect(
    132,
    y - 5,
    48,
    9,
    4,
    4,
    "F"
  );

  doc.setTextColor(...COLORS.white);

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(9);

  doc.text(
    text,
    156,
    y + 1,
    {
      align: "center"
    }
  );

  doc.setTextColor(...COLORS.black);

  doc.setFont(
    "helvetica",
    "normal"
  );

};

// ===============================
// Dynamic Values From Backend
// ===============================

const atsScore =
  analysis?.atsScore ?? 0;

const atsReady =
  analysis?.atsReady ??
  (atsScore >= 80);

const resumeReady =
  atsScore >= 70;

const role =
  analysis?.recommendedRole ||
  "Not Available";

const chance =
  analysis?.interviewChance ||
  "Low";

  doc.text(
    "Recommended Role",
    25,
    currentY + 49
  );

  drawBadge(
    role,
    COLORS.secondary,
    currentY + 49
  );

  // ===============================
  // Overall ATS Score
  // ===============================

  doc.text(
    "Overall ATS Score",
    25,
    currentY + 10
  );

  drawBadge(
    `${analysis.atsScore}%`,
    COLORS.primary,
    currentY + 10
  );

  // ===============================
  // Resume Ready
  // ===============================

  doc.text(
    "Resume Ready",
    25,
    currentY + 23
  );

  drawBadge(
    resumeReady
      ? "YES"
      : "NO",
    resumeReady
      ? COLORS.success
      : COLORS.danger,
    currentY + 23
  );

  // ===============================
  // ATS Ready
  // ===============================

  doc.text(
    "ATS Ready",
    25,
    currentY + 36
  );

  drawBadge(
    atsReady
      ? "YES"
      : "NO",
    atsReady
      ? COLORS.success
      : COLORS.warning,
    currentY + 36
  );

  // ===============================
  // Recommended Role
  // ===============================

  // ===============================
  // Interview Chance
  // ===============================

  doc.text(
    "Interview Chance",
    25,
    currentY + 62
  );

  drawBadge(
    chance.toUpperCase(),
    chance === "Very High" ||
    chance === "High"
      ? COLORS.success
      : chance === "Medium"
      ? COLORS.warning
      : COLORS.danger,
    currentY + 62
  );

  // ===============================
  // Move Below Card
  // ===============================

  currentY += cardHeight;

  // ===============================
  // Divider
  // ===============================

  doc.setDrawColor(
    ...COLORS.gray300
  );

  doc.line(
    PAGE.margin,
    currentY + 7,
    PAGE.width - PAGE.margin,
    currentY + 7
  );

  currentY += 20;

  return currentY;
};