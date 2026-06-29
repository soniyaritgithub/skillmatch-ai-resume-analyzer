import fs from "fs";
import mammoth from "mammoth";

import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";



export const extractResumeText = async (file) => {
  try {
    // ==========================
    // PDF
    // ==========================

    if (file.mimetype === "application/pdf") {
      const buffer = fs.readFileSync(file.path);

      const uint8Array = new Uint8Array(buffer);

      const pdf = await pdfjsLib.getDocument({
        data: uint8Array,
      }).promise;

      let text = "";

      for (let pageNo = 1; pageNo <= pdf.numPages; pageNo++) {
        const page = await pdf.getPage(pageNo);

        const content = await page.getTextContent();

        const pageText = content.items
          .map((item) => item.str || "")
          .join(" ");

        text += pageText + "\n";
      }

      return text.trim();
    }

    // ==========================
    // DOCX
    // ==========================

    if (
      file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const result = await mammoth.extractRawText({
        path: file.path,
      });

      return result.value.trim();
    }

    throw new Error("Unsupported file format");
  } catch (error) {
    console.error("Resume Extraction Error:", error);

    throw error;
  } finally {
    if (file?.path && fs.existsSync(file.path)) {
      fs.unlinkSync(file.path);
    }
  }
};