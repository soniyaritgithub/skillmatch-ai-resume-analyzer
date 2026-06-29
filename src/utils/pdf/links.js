import { COLORS, FONT } from "./theme";
import { PAGE } from "./layout";

export const drawLinks = (
  doc,
  analysis,
  currentY
) => {

  // ===============================
  // Small gap from previous section
  // ===============================

  currentY += 10;

  // ===============================
  // Page Break
  // ===============================

  if (currentY + 60 > 270) {
    doc.addPage();
    currentY = PAGE.margin;
  }

  // ===============================
  // Dynamic Links
  // ===============================

  const linkedin =
    analysis?.professionalLinks?.linkedin ||
    "Not Found";

  const github =
    analysis?.professionalLinks?.github ||
    "Not Found";

  const portfolio =
    analysis?.professionalLinks?.portfolio ||
    "Not Found";

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
    "Professional Links",
    PAGE.margin,
    currentY
  );

  currentY += 12;

  // ===============================
  // Card
  // ===============================

  doc.setFillColor(
    248,
    250,
    252
  );

  doc.roundedRect(
    PAGE.margin,
    currentY,
    PAGE.width - PAGE.margin * 2,
    42,
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
    ...COLORS.primary
  );

  // ===============================
  // LinkedIn
  // ===============================

  doc.text(
    "LinkedIn",
    PAGE.margin + 5,
    currentY + 10
  );

  if (linkedin !== "Not Found") {
    doc.textWithLink(
      linkedin,
      PAGE.margin + 40,
      currentY + 10,
      {
        url: linkedin,
      }
    );
  } else {
    doc.text(
      "Not Found",
      PAGE.margin + 40,
      currentY + 10
    );
  }

  // ===============================
  // GitHub
  // ===============================

  doc.text(
    "GitHub",
    PAGE.margin + 5,
    currentY + 22
  );

  if (github !== "Not Found") {
    doc.textWithLink(
      github,
      PAGE.margin + 40,
      currentY + 22,
      {
        url: github,
      }
    );
  } else {
    doc.text(
      "Not Found",
      PAGE.margin + 40,
      currentY + 22
    );
  }

  // ===============================
  // Portfolio
  // ===============================

  doc.text(
    "Portfolio",
    PAGE.margin + 5,
    currentY + 34
  );

  if (portfolio !== "Not Found") {
    doc.textWithLink(
      portfolio,
      PAGE.margin + 40,
      currentY + 34,
      {
        url: portfolio,
      }
    );
  } else {
    doc.text(
      "Not Found",
      PAGE.margin + 40,
      currentY + 34
    );
  }

  // ===============================
  // Divider
  // ===============================

  currentY += 50;

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