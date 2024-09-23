import React from "react";
import { Link } from "react-router-dom";

const Attendance = () => {
  return (
    <ul className="nested-list">
      <li>
        <Link to="/attendance/import">Attendance Import</Link>
      </li>
      <li>
        <Link to="/attendance/manual-punching">Manual Punching</Link>
      </li>
      <li>
        <Link to="/attendance/leave-application">Leave Application</Link>
      </li>
      <li>
        <Link to="/attendance/absents-details">Absents Details</Link>
      </li>
      <li>
        <Link to="/attendance/verification">Attendance Verification</Link>
      </li>
    </ul>
  );
};

export default Attendance;
