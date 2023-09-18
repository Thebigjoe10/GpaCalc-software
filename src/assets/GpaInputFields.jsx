/* eslint-disable react/prop-types */
import React from "react";

const GpaInputFields = ({ inputs, handleChange }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {inputs.map((input, index) => (
        <div key={index}>
          <input
            name="course"
            onChange={(event) => handleChange(event, index)}
            placeholder="Course"
            value={input.course}
          />
          <input
            name="grade"
            onChange={(event) => handleChange(event, index)}
            placeholder="Grade"
            value={input.grade}
          />
          <input
            name="units"
            onChange={(event) => handleChange(event, index)}
            placeholder="Units"
            value={input.units}
          />
        </div>
      ))}
    </div>
  );
};

export default GpaInputFields;
