import React, { useState } from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GpaDisplay from "./GpaDisplay";
import GpaInputFields from "./GpaInputFields"; 

const GpaInput = () => {
  const [inputs, setInputs] = useState([
    {
      course: "",
      grade: "",
      units: "",
    },
  ]);

  const gradeScale = {
    A: 5.0,
    B: 4.0,
    C: 3.0,
    D: 2.0,
    E: 1.0,
    F: 0.0,
  };

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => {
      const updatedInputs = [...prevInputs];
      updatedInputs[index][name] = value;
      return updatedInputs;
    });
  };

  const handleAddInput = () => {
    setInputs((prevInputs) => {
      return [
        ...prevInputs,
        {
          course: "",
          grade: "",
          units: "",
        },
      ];
    });
  };

  const calculateGpa = () => {
    let totalGpa = 0;
    let totalUnits = 0;

    inputs.forEach((input) => {
      const grade = input.grade.toUpperCase();
      const units = parseFloat(input.units);

      if (!isNaN(units) && gradeScale[grade]) {
        const gpa = gradeScale[grade] * units;
        totalGpa += gpa;
        totalUnits += units;
      }
    });

    if (totalUnits === 0) {
      return "GPA: 0.00"; // To avoid dividing by zero and format to two decimal places
    }

    const calculatedGpa = (totalGpa / totalUnits).toFixed(2); // Round to two decimal places
    return `GPA: ${calculatedGpa}`;
  };

  return (
    <div>
      <form className="create-field">
        <GpaInputFields inputs={inputs} handleChange={handleChange} />
        <AddCircleOutlineIcon onClick={handleAddInput} className="add" />
        <GpaDisplay gpa={calculateGpa()} />
      </form>
    </div>
  );
};



export default GpaInput;
