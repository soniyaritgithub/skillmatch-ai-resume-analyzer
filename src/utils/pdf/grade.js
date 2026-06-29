import { COLORS, FONT } from "./theme";
import { PAGE } from "./layout";

const GRADE_CONFIG = {
  "A+": {
    message: "Excellent",
    color: COLORS.success,
  },
  A: {
    message: "Very Good",
    color: COLORS.success,
  },
  "B+": {
    message: "Good",
    color: COLORS.warning,
  },
  B: {
    message: "Average",
    color: COLORS.warning,
  },
  C: {
    message: "Needs Improvement",
    color: COLORS.warning,
  },
  D: {
    message: "Poor",
    color: COLORS.danger,
  },
};

export const drawGrade = (
  doc,
  analysis,
  currentY
) => {

  // ===============================
  // Page Break
  // ===============================

  if (currentY + 70 > 270) {
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
    "Resume Grade",
    PAGE.margin,
    currentY
  );

  currentY += 12;

  // ===============================
  // Dynamic Grade
  // ===============================

  const grade =
    analysis?.grade ?? "D";

  const {
    message,
    color,
  } =
    GRADE_CONFIG[grade] ??
    GRADE_CONFIG.D;

  // ===============================
  // Grade Card
  // ===============================

  doc.setFillColor(
    ...color
  );

  doc.roundedRect(
    PAGE.margin,
    currentY,
    170,
    40,
    6,
    6,
    "F"
  );

  doc.setTextColor(
    ...COLORS.white
  );

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(28);

  doc.text(
    grade,
    PAGE.width / 2,
    currentY + 16,
    {
      align: "center",
    }
  );

  doc.setFont(
    "helvetica",
    "normal"
  );

  doc.setFontSize(12);

  doc.text(
    message,
    PAGE.width / 2,
    currentY + 28,
    {
      align: "center",
    }
  );

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