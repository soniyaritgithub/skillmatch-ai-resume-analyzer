import { COLORS, FONT } from "./theme";
import { PAGE } from "./layout";

export const drawWeakness = (
  doc,
  analysis,
  currentY
) => {

if (currentY + 80 > 270) {
  doc.addPage();
  currentY = PAGE.margin;
}

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
  "Weakness Analysis",
  PAGE.margin,
  currentY
);

currentY += 12;

const weaknesses =
  analysis?.weaknesses?.length
    ? analysis.weaknesses
    : [
        "Missing Keywords",
        "Missing Certifications",
        "Missing Projects",
        "Missing Action Verbs",
      ];

      weaknesses.forEach((item) => {
const lines =
  doc.splitTextToSize(
    item,
    145
  );

const cardHeight =
  lines.length * 6 + 8;

  if (
  currentY + cardHeight > 270
) {
  doc.addPage();
  currentY = PAGE.margin;
}

doc.setFillColor(
  254,
  242,
  242
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

doc.setFillColor(
  ...COLORS.danger
);

doc.circle(
  PAGE.margin + 7,
  currentY + 8,
  3,
  "F"
);
doc.setTextColor(
  ...COLORS.white
);

doc.setFontSize(8);

doc.text(
  "✕",
  PAGE.margin + 6,
  currentY + 9
);

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
currentY +=
  cardHeight + 6;

});

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