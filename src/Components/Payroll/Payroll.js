import React from "react";
import { Link } from "react-router-dom";

const Attendance = () => {
  return (
    <ul className="nested-list">
      <li>
        <Link to="/payroll/payslip">Payslip</Link>
      </li>
      <li>
        <Link to="/payroll/salary-setup">Salary Setup</Link>
      </li>
      <li>
        <Link to="/payroll/salary-process">Salary Process</Link>
      </li>
      <li>
        <Link to="/payroll/employee-loan">Employee Loan</Link>
      </li>
      <li>
        <Link to="/payroll/conveyance">Employee Conveyance</Link>
      </li>
      <li>
        <Link to="/payroll/tax-file-upload">Tax File Upload</Link>
      </li>
    </ul>
  );
};

export default Attendance;
