
import { COLORS, FONT } from "./theme";

export const drawHeader = (
  doc,
  analysis,
  file
) => {

  // ===============================
  // Header Background
  // ===============================

  doc.setFillColor(...COLORS.primary);

  doc.rect(
    0,
    0,
    210,
    28,
    "F"
  );

  // ===============================
  // Title
  // ===============================

  doc.setFontSize(FONT.title);

  doc.setTextColor(...COLORS.white);

  doc.text(
    "AI Resume ATS Report",
    20,
    18
  );

  // ===============================
  // ATS Badge
  // ===============================

  doc.setFillColor(
    255,
    255,
    255
  );

  doc.roundedRect(
    145,
    8,
    35,
    14,
    4,
    4,
    "F"
  );

  doc.setFontSize(FONT.heading);

  doc.setTextColor(
    16,
    185,
    129
  );

  doc.text(
    `${analysis.atsScore}%`,
    153,
    17
  );

  // ===============================
  // Resume Name
  // ===============================

  doc.setFontSize(FONT.subHeading);

  doc.setTextColor(...COLORS.black);

  doc.text(
    `Resume : ${file?.name || "Resume.pdf"}`,
    20,
    40
  );

  // ===============================
  // Generated Date
  // ===============================

  doc.setFontSize(FONT.small);
  doc.text(
    `Generated : ${new Date().toLocaleString()}`,
    20,
    48
  );

};