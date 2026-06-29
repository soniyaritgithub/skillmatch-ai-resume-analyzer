import { COLORS, FONT } from "./theme";
import { PAGE } from "./layout";

export const drawStrengths = (
  doc,
  analysis,
  currentY
) => {

  // ===============================
  // Estimated Height Check
  // ===============================

  const estimatedHeight = 90;

  if (currentY + estimatedHeight > 270) {
    doc.addPage();
    currentY = PAGE.margin;
  }

  // ===============================
  // Heading
  // ===============================

  doc.setFont("helvetica", "bold");
  doc.setFontSize(FONT.subHeading);
  doc.setTextColor(...COLORS.black);

  doc.text(
    "Resume Strengths",
    PAGE.margin,
    currentY
  );

  currentY += 12;

  // ===============================
  // Dynamic Strengths
  // ===============================

  const strengths =
    analysis?.strengths?.length
      ? analysis.strengths
      : [
          "Strong Technical Skills",
          "ATS Friendly Resume",
          "Excellent Grammar",
          "Professional Formatting",
        ];

  strengths.forEach((item) => {

    // Wrap Text
    const lines = doc.splitTextToSize(
      item,
      145
    );

    // Card Height
    const cardHeight =
      lines.length * 6 + 8;

    // Page Break
    if (currentY + cardHeight > 270) {
      doc.addPage();
      currentY = PAGE.margin;
    }

    // Card Background
    doc.setFillColor(
      236,
      253,
      245
    );

    doc.roundedRect(
      PAGE.margin,
      currentY,
      170,
      cardHeight,
      4,
      4,
      "F"
    );

    // Green Circle
    doc.setFillColor(
      ...COLORS.success
    );

    doc.circle(
      PAGE.margin + 7,
      currentY + 8,
      3,
      "F"
    );

    // Tick Icon
    doc.setTextColor(
      ...COLORS.white
    );

    doc.setFontSize(8);

    doc.text(
      "✓",
      PAGE.margin + 6,
      currentY + 9
    );

    // Strength Text
    doc.setTextColor(
      ...COLORS.black
    );

    doc.setFontSize(
      FONT.body
    );

    doc.text(
      lines,
      PAGE.margin + 15,
      currentY + 9
    );

    // Next Card
    currentY += cardHeight + 6;
  });

  // ===============================
  // Divider
  // ===============================

  doc.setDrawColor(
    ...COLORS.gray300
  );

  doc.line(
    PAGE.margin,
    currentY,
    PAGE.width - PAGE.margin,
    currentY
  );

  currentY += 10;

  return currentY;
};