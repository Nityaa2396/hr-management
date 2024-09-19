import React from "react";
import { Link } from "react-router-dom";

const Employees = () => {
  return (
    <ul className="nested-list">
      <li>
        <Link to="/employees/create">Employee Create</Link>
      </li>
      <li>
        <Link to="/employees/list">Employee List</Link>
      </li>
      <li>
        <Link to="/employees/imports">Employee Imports</Link>
      </li>
      <li>
        <Link to="/employees/award">Award List</Link>
      </li>
      <li>
        <Link to="/employees/notice">Notice List</Link>
      </li>
    </ul>
  );
};

export default Employees;
