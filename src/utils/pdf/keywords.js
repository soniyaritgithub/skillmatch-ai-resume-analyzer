import { COLORS, FONT } from "./theme";

export const drawKeywords = (
  doc,
  analysis,
  currentY
) => {

  // ===============================
  // Missing Keywords
  // ===============================

  doc.setFontSize(FONT.subHeading);
  doc.setTextColor(0);

  doc.text(
    "Missing Keywords",
    20,
    currentY
  );

  currentY += 10;

  analysis.missingKeywords.forEach((item) => {

    // Page Break
    if (currentY + 12 > 260) {
      doc.addPage();
      currentY = 20;
    }

    // Chip Background
    doc.setFillColor(...COLORS.chipRed);

    doc.roundedRect(
      20,
      currentY,
      55,
      8,
      3,
      3,
      "F"
    );

    // Chip Text
    doc.setTextColor(...COLORS.danger);

    doc.text(
      item,
      24,
      currentY + 5
    );

    // Reset Text Color
    doc.setTextColor(0);

    // Next Chip
    currentY += 12;

  });

  // Return updated position
  return currentY;
};