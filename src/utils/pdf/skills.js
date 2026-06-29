import { COLORS, FONT } from "./theme";
import { PAGE } from "./layout";

export const drawSkills = (
  doc,
  analysis,
  currentY
) => {

  // Page Break
  if (currentY + 120 > 270) {
    doc.addPage();
    currentY = PAGE.margin;
  }

  // Heading
  doc.setFont("helvetica", "bold");
  doc.setFontSize(FONT.subHeading);
  doc.setTextColor(...COLORS.black);

  doc.text(
    "Technical Skills",
    PAGE.margin,
    currentY
  );

  currentY += 12;

  // ===============================
// Dynamic Skills
// ===============================

const skills = (() => {

  if (
    Array.isArray(analysis?.skillsData) &&
    analysis.skillsData.length
  ) {
    return analysis.skillsData;
  }

  if (
    Array.isArray(analysis?.extractedSkills) &&
    analysis.extractedSkills.length
  ) {
    return analysis.extractedSkills.map(
      (skill) => ({
        name: skill,
        score:
          analysis?.skills ??
          analysis?.keywords ??
          70,
      })
    );
  }

  return [
    {
      name: "No Skills Detected",
      score: 0,
    },
  ];

})();

  skills.forEach((skill) => {

    if (currentY + 24 > 270) {
      doc.addPage();
      currentY = PAGE.margin;
    }

    // Skill Name
    doc.setFont("helvetica", "normal");
    doc.setFontSize(FONT.body);
    doc.setTextColor(...COLORS.black);

    const lines = doc.splitTextToSize(
      skill.name,
      70
    );

    doc.text(
      lines,
      PAGE.margin,
      currentY + 5
    );

    // Level Badge
    const level =
      skill.score >= 90
        ? "Expert"
        : skill.score >= 75
        ? "Advanced"
        : "Intermediate";

    doc.setFillColor(
      241,
      245,
      249
    );

    doc.roundedRect(
      PAGE.width - 75,
      currentY - 2,
      35,
      8,
      3,
      3,
      "F"
    );

    doc.setFontSize(8);

    doc.setTextColor(
      ...(COLORS.gray500 || [107, 114, 128])
    );

    doc.text(
      level,
      PAGE.width - 68,
      currentY + 3
    );

    // Background Progress Bar
    const barWidth =
      PAGE.width -
      PAGE.margin * 2;

    doc.setFillColor(
      229,
      231,
      235
    );

    doc.roundedRect(
      PAGE.margin,
      currentY + 10,
      barWidth,
      6,
      3,
      3,
      "F"
    );

    // Filled Progress
    const progressWidth =
      (barWidth * skill.score) / 100;

    const getSkillColor = (score) => {
      if (score >= 85)
        return COLORS.success;

      if (score >= 70)
        return COLORS.warning;

      return COLORS.danger;
    };

    doc.setFillColor(
      ...getSkillColor(skill.score)
    );

    doc.roundedRect(
      PAGE.margin,
      currentY + 10,
      progressWidth,
      6,
      3,
      3,
      "F"
    );

    // Score
    doc.setFontSize(8);

    doc.setTextColor(
      ...COLORS.black
    );

    doc.text(
      `${skill.score}%`,
      PAGE.width - 35,
      currentY + 5
    );

    const rowHeight = Math.max(
      lines.length * 6 + 16,
      24
    );

    currentY += rowHeight;

  });

  // Divider
  doc.setDrawColor(
    ...(COLORS.gray300 || [209, 213, 219])
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