import React from "react";
import './styles.css'


function ResultTable(props) {
  return (
    <table className="list-group d-flex justify-content-between">
    {/* Placeholder for table */}
      <thead>
        <tr className="EmployeePlaceholder d-flex justify-content-between align-items-center">
          <td className="placeholder">ID</td>
          <td className="placeholder">Employee's Name</td>
          <td className="placeholder">Phone</td>
          <td className="placeholder">Email</td>
          <td className="placeholder">Date of Birth</td>
        </tr>
      </thead>
      {/* for sorting */}
      {/* <tr class="sortingButton">
      <td><button onClick={props.handleButtonPush}>Click to Sort Names Alphabetaclly</button></td>
      </tr> */}
      <thead>

      </thead>

      {/* Employee Results */}
      <tbody>
      {props.results.map(result => (
        <tr 
        className="EmployeeResults d-flex align-items-center justify-content-between"
        key={result.name.first + result.name.last}>
            <td className="tableList"><img src={result.picture.large}/></td>
            <td className="tableList">{result.name.first} {result.name.last}</td>
            <td className="tableList">{result.phone}</td>
            <td className="tableList">{result.email}</td>
            <td className="tableList">{result.dob.date.slice(0,10)}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
}

export default ResultTable;