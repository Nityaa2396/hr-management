import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Components/Dashboard";
import EmployeeCreate from "./Components/Employees/EmployeeCreate";
import EmployeeList from "./Components/Employees/EmployeeList";
import EmployeeImports from "./Components/Employees/EmployeeImports";
import AwardList from "./Components/Employees/AwardList";
import NoticeList from "./Components/Employees/NoticeList";
import AttendanceImport from "./Components/Attendance/AttendanceImport"; // New
import ManualPunching from "./Components/Attendance/ManualPunching"; // New
import LeaveApplication from "./Components/Attendance/LeaveApplication"; // New
import AbsentsDetails from "./Components/Attendance/AbsentsDetails"; // New
import AttendanceVerification from "./Components/Attendance/AttendanceVerification"; // New
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [registeredUsers, setRegisteredUsers] = useState([
    { email: "test@example.com", password: "Test@123" },
  ]);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleLogin = (email, password) => {
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials.");
    }
  };

  const handleRegister = (email, password) => {
    setRegisteredUsers([...registeredUsers, { email, password }]);
    setIsAuthenticated(true);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <Router>
      <div className="app-container">
        {isAuthenticated && (
          <Sidebar
            toggleSidebar={toggleSidebar}
            sidebarVisible={sidebarVisible}
          />
        )}
        <div
          className={`content ${
            sidebarVisible ? "with-sidebar" : "without-sidebar"
          }`}
        >
          <Routes>
            <Route
              path="/"
              element={
                isAuthenticated ? (
                  <Navigate to="/dashboard" />
                ) : (
                  <Login onLogin={handleLogin} onRegister={handleRegister} />
                )
              }
            />
            <Route
              path="/dashboard"
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
            />

            {/* Employee subpages */}
            <Route
              path="/employees/create"
              element={
                isAuthenticated ? <EmployeeCreate /> : <Navigate to="/" />
              }
            />
            <Route
              path="/employees/list"
              element={isAuthenticated ? <EmployeeList /> : <Navigate to="/" />}
            />
            <Route
              path="/employees/imports"
              element={
                isAuthenticated ? <EmployeeImports /> : <Navigate to="/" />
              }
            />
            <Route
              path="/employees/award"
              element={isAuthenticated ? <AwardList /> : <Navigate to="/" />}
            />
            <Route
              path="/employees/notice"
              element={isAuthenticated ? <NoticeList /> : <Navigate to="/" />}
            />

            {/* Attendance subpages */}
            <Route
              path="/attendance/import"
              element={
                isAuthenticated ? <AttendanceImport /> : <Navigate to="/" />
              }
            />
            <Route
              path="/attendance/manual-punching"
              element={
                isAuthenticated ? <ManualPunching /> : <Navigate to="/" />
              }
            />
            <Route
              path="/attendance/leave-application"
              element={
                isAuthenticated ? <LeaveApplication /> : <Navigate to="/" />
              }
            />
            <Route
              path="/attendance/absents-details"
              element={
                isAuthenticated ? <AbsentsDetails /> : <Navigate to="/" />
              }
            />
            <Route
              path="/attendance/verification"
              element={
                isAuthenticated ? (
                  <AttendanceVerification />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
