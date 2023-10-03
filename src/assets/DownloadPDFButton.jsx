/* eslint-disable react/prop-types */
import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import MyTable from "./Table";

const DownloadPDFButton = ({ calculateGpa, tableData }) => {
  const tableRef = useRef(null);

  const handleDownloadPDF = () => {
    const table = tableRef.current;
  
    if (!table) {
      return;
    }
  
    html2canvas(table).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
  
      const pdf = new jsPDF("p", "mm", "a4");
  
      // Calculate the table width and height
      const tableWidth = 190; // Adjust as needed for table width
      const tableHeight = (canvas.height * tableWidth) / canvas.width;
  
      // Calculate the Y coordinate to position the text above the table
      const textY = 10; // Adjust as needed for spacing above the table
  
      // Center the text horizontally
      const textWidth = pdf.getStringUnitWidth(calculateGpa()) * pdf.internal.getFontSize();
      const textX = (tableWidth - textWidth) / 2;
  
      // Add the image of the table
      pdf.addImage(imgData, "PNG", 10, textY + pdf.internal.getFontSize(), tableWidth, tableHeight);
  
      // Add the GPA text centered above the table
      pdf.text(textX, textY, calculateGpa());
  
      pdf.save("table.pdf");
    });
  };
  

  return (
    <div>
      <SaveAltIcon onClick={handleDownloadPDF} className="download-pdf-btn" />
      <div id="pdf-content" ref={tableRef}>
        <MyTable tableData={tableData} />
      </div>
    </div>
  );
};

export default DownloadPDFButton;
