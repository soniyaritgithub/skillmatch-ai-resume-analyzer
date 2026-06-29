export const checkPageBreak = (
  doc,
  currentY,
  height
) => {

  if(currentY + height > 260){

      doc.addPage();

      return 20;

  }

  return currentY;

};