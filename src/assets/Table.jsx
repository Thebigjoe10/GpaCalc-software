/* eslint-disable react/prop-types */
import React from "react";

const MyTable = ({ tableData }) => {
  
  return (
    <div className="table-wrapper">
      <table className="fl-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.course}</td>
              <td>{row.grade}</td>
              <td>{row.units}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTable;
