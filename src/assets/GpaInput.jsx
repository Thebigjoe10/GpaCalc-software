import React, { useState, useRef } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GpaDisplay from "./GpaDisplay";
import GpaInputFields from "./GpaInputFields";
import DownloadPDFButton from "./DownloadPDFButton";

const GpaInput = () => {
  const [inputs, setInputs] = useState([
    {
      course: "",
      grade: "",
      units: "",
    },
  ]);

  // Initialize tableData with an empty array
  const [tableData, setTableData] = useState([]);

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index][name] = value;
      return updatedInputs;
    });
  };

  const handleAddInput = () => {
    setInputs((prevInputs) => [
      ...prevInputs,
      {
        course: "",
        grade: "",
        units: "",
      },
    ]);

    setTableData((prevTableData) => [
      ...prevTableData,
      {
        course: "",
        grade: "",
        units: "",
      },
    ]);
  };

  const gradeScale = {
    A: 5.0,
    B: 4.0,
    C: 3.0,
    D: 2.0,
    E: 1.0,
    F: 0.0,
  };

  const calculateGpa = () => {
    let totalGpa = 0;
    let totalUnits = 0;

    inputs.forEach((input) => {
      const { grade, units } = input;
      const gradePoints = gradeScale[grade.toUpperCase()];

      if (gradePoints !== undefined && !isNaN(units)) {
        totalGpa += gradePoints * parseFloat(units);
        totalUnits += parseFloat(units);
      }
    });

    if (totalUnits === 0) {
      return "GPA: 0.00";
    }

    const calculatedGpa = (totalGpa / totalUnits).toFixed(2);
    return `GPA: ${calculatedGpa}`;
  };

  const handleGenerateTable = (e) => {
    e.preventDefault();
    setTableData([...inputs]);
  };

  return (
    <div>
      <form className="create-field">
        <GpaInputFields inputs={inputs} handleChange={handleChange} />
        <AddCircleOutlineIcon onClick={handleAddInput} className="add" />
        <button onClick={handleGenerateTable} className="table-result-btn">
          Result Table
        </button>
        <GpaDisplay gpa={calculateGpa()} />
      </form>
      {/* Add the DownloadPDFButton component and pass necessary props */}
      <DownloadPDFButton tableData={tableData} calculateGpa={calculateGpa} />

      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8414334205797074"
        crossorigin="anonymous"
      ></script>
    </div>
  );
};

export default GpaInput;
