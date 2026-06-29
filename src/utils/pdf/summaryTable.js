import autoTable from "jspdf-autotable";
import { COLORS } from "./theme";

export const drawSummaryTable = (doc, analysis) => {
  autoTable(doc, {
    startY: 58,
    head: [["Category", "Score"]],
    body: [
      ["ATS Score", `${analysis.atsScore}%`],
      ["Keywords", `${analysis.keywords}%`],
      ["Grammar", `${analysis.grammar}%`],
      ["Skills", `${analysis.skills}%`],
    ],
    pageBreak: "auto",
  });

  // Divider
  doc.setDrawColor(...COLORS.gray300);

  doc.line(
    20,
    doc.lastAutoTable.finalY + 8,
    190,
    doc.lastAutoTable.finalY + 8
  );

  // Return next Y position
  return doc.lastAutoTable.finalY + 18;
};