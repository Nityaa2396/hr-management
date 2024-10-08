import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleDown,
  faBars,
  faPowerOff,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Sidebar.css";

const Sidebar = ({ setIsAuthenticated }) => {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isEmployeeMenuOpen, setEmployeeMenuOpen] = useState(false);
  const [isAttendanceMenuOpen, setAttendanceMenuOpen] = useState(false);
  const [isPayrollMenuOpen, setPayrollMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleEmployeeMenu = () => {
    setEmployeeMenuOpen(!isEmployeeMenuOpen);
  };

  const toggleAttendanceMenu = () => {
    setAttendanceMenuOpen(!isAttendanceMenuOpen);
  };

  const togglePayrollMenu = () => {
    setPayrollMenuOpen(!isPayrollMenuOpen);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <button onClick={toggleSidebar} className="toggle-btn">
          <FontAwesomeIcon icon={isSidebarCollapsed ? faBars : faAngleRight} />
        </button>
        <img
          className="prof"
          src="https://plus.unsplash.com/premium_photo-1675349302983-4d7c77c4f673?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Profile"
        />
      </div>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        {/* Employees Sub-menu */}
        <li>
          <div className="menu-item" onClick={toggleEmployeeMenu}>
            <FontAwesomeIcon icon={faUsers} className="users-icon" />
            Employees
            <FontAwesomeIcon
              icon={isEmployeeMenuOpen ? faAngleDown : faAngleRight}
              className="employee-menu-icon"
            />
          </div>

          {isEmployeeMenuOpen && (
            <ul className="submenu">
              <li>
                <Link to="/employees/create">Create Employee</Link>
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
          )}
        </li>

        {/* Attendance Sub-menu */}
        <li>
          <div className="menu-item" onClick={toggleAttendanceMenu}>
            Attendance
            <FontAwesomeIcon
              icon={isAttendanceMenuOpen ? faAngleDown : faAngleRight}
              className="attendance-menu-icon"
            />
          </div>

          {isAttendanceMenuOpen && (
            <ul className="submenu">
              <li>
                <Link to="/attendance/import">Attendance Import</Link>
              </li>
              <li>
                <Link to="/attendance/manual-punching">Manual Punching</Link>
              </li>
              <li>
                <Link to="/attendance/leave-application">
                  Leave Application
                </Link>
              </li>
              <li>
                <Link to="/attendance/absents-details">Absents Details</Link>
              </li>
              <li>
                <Link to="/attendance/verification">
                  Attendance Verification
                </Link>
              </li>
            </ul>
          )}
        </li>

        {/* Payroll Sub-menu */}
        <li>
          <div className="menu-item" onClick={togglePayrollMenu}>
            Payroll
            <FontAwesomeIcon
              icon={isPayrollMenuOpen ? faAngleDown : faAngleRight}
              className="payroll-menu-icon"
            />
          </div>

          {isPayrollMenuOpen && (
            <ul className="submenu">
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
          )}
        </li>

        <li>
          <Link to="/reports">Reports</Link>
        </li>
        <li>
          <Link to="/job">Job</Link>
        </li>
        <li>
          <Link to="/masters">Masters</Link>
        </li>
        <li>
          <Link to="/app-masters">App Masters</Link>
        </li>
        <li onClick={handleLogout}>
          <Link to="/logout">
            Logout <FontAwesomeIcon icon={faPowerOff} className="logout-icon" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
