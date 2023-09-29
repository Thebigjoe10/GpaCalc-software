/* eslint-disable react/prop-types */
import React from "react";

const GpaDisplay = ({ gpa }) => {
  return (
    <span style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
      <p>{gpa}</p>
    </span>
  );
};

export default GpaDisplay;
