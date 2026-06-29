import { COLORS, FONT } from "./theme";

export const drawSuggestions = (
  doc,
  analysis,
  currentY
) => {

  // ===============================
  // AI Suggestions
  // ===============================

  currentY += 8;

  doc.setFontSize(FONT.subHeading);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(0);

  doc.text(
    "AI Suggestions",
    20,
    currentY
  );

  currentY += 10;

  analysis.suggestions.forEach((item) => {

    // Wrap long text
    const lines = doc.splitTextToSize(
      item,
      155
    );

    // Dynamic card height
    const cardHeight =
      lines.length * 7 + 8;

    // Page Break
    if (currentY + cardHeight > 260) {
      doc.addPage();
      currentY = 20;
    }

    // Card Background
    doc.setFillColor(
      ...COLORS.cardGreen
    );

    doc.roundedRect(
      20,
      currentY,
      170,
      cardHeight,
      3,
      3,
      "F"
    );

    // Suggestion Text
    doc.setFont(
      "helvetica",
      "normal"
    );

    doc.setFontSize(
      FONT.body
    );

    doc.setTextColor(
      ...COLORS.success
    );

    doc.text(
      lines,
      25,
      currentY + 7
    );

    // Reset Color
    doc.setTextColor(0);

    // Next Card
    currentY += cardHeight + 6;

  });

  // ===============================
  // Space before next section
  // ===============================

  currentY += 10;

  return currentY;
};