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

    const tableHeight = table.offsetHeight;

    html2canvas(table).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 10, 10, 190, 0);

      // Calculate the Y coordinate to position the text below the table
      const verticalPadding = 10; // Adjust as needed for spacing
      const textY = tableHeight + verticalPadding;

      pdf.text(10, textY, calculateGpa());
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
