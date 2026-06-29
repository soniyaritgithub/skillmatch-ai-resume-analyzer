import { jsPDF } from "jspdf";
import toast from "react-hot-toast";

import { drawCoverPage } from "./coverPage";
import { drawHeader } from "./header";
import { drawSummaryTable } from "./summaryTable";
import { drawKeywords } from "./keywords";
import { drawSuggestions } from "./suggestions";
import { drawSummaryBox } from "./summaryBox";
import { drawStrengths } from "./strengths";
import { drawWeakness } from "./weakness";
import { drawGrade } from "./grade";
import { drawLinks } from "./links";
import { drawSkills } from "./skills";
import { drawRecruiterInsights } from "./recruiterInsights";
import { drawFooter } from "./footer";

export const downloadReport = (
  analysis,
  file
) => {

  console.log("Download clicked");

  if (!analysis) {
    toast.error(
      "Please analyze your resume first."
    );
    return;
  }

  // ===============================
  // Create PDF
  // ===============================

  const doc = new jsPDF();

  // ===============================
  // Cover Page
  // ===============================

  drawCoverPage(
    doc,
    analysis,
    file
  );

  // ===============================
  // Report Header
  // ===============================

  drawHeader(
    doc,
    analysis,
    file
  );

  // ===============================
  // ATS Summary
  // ===============================

  let currentY = drawSummaryTable(
    doc,
    analysis
  );

  // ===============================
  // Missing Keywords
  // ===============================

  currentY = drawKeywords(
    doc,
    analysis,
    currentY
  );

  // ===============================
  // AI Suggestions
  // ===============================

  currentY = drawSuggestions(
    doc,
    analysis,
    currentY
  );

  // ===============================
  // Recruiter Summary
  // ===============================

  currentY = drawSummaryBox(
    doc,
    analysis,
    currentY
  );

  // ===============================
  // Resume Strengths
  // ===============================

  currentY = drawStrengths(
    doc,
    analysis,
    currentY
  );

  // ===============================
  // Weakness Analysis
  // ===============================

  currentY = drawWeakness(
    doc,
    analysis,
    currentY
  );

  // ===============================
  // Resume Grade
  // ===============================

  currentY = drawGrade(
    doc,
    analysis,
    currentY
  );

  // ===============================
  // Links
  // ===============================

  currentY = drawLinks(
    doc,
    analysis,
    currentY
  );

  // ===============================
  // Technical Skills
  // ===============================

  currentY = drawSkills(
    doc,
    analysis,
    currentY
  );

  // ===============================
  // Recruiter Insights
  // ===============================

 drawRecruiterInsights(
  doc,
  analysis,
  currentY
);

  // ===============================
  // Footer
  // ===============================

  const totalPages =
    doc.getNumberOfPages();

  for (
    let page = 1;
    page <= totalPages;
    page++
  ) {
    doc.setPage(page);
    drawFooter(doc);
  }

  // ===============================
  // Save PDF
  // ===============================

  doc.save("ATS_Report.pdf");

  toast.success(
    "Report downloaded successfully"
  );
};