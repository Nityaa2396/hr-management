import React, { useState, useEffect } from "react";
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
  const [registeredUsers, setRegisteredUsers] = useState([]);
  const [sidebarVisible, setSidebarVisible] = useState(true);

  const handleRegister = (email, password) => {
    setRegisteredUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, { email, password }];
      // Save updated users to local storage
      localStorage.setItem("registeredUsers", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
    setIsAuthenticated(true);
  };

  const handleLogin = (email, password) => {
    console.log("Trying to log in with:", email, password);
    console.log("Current registered users:", registeredUsers);
    const user = registeredUsers.find(
      (user) => user.email === email && user.password === password
    );
    if (user) {
      setIsAuthenticated(true);
    } else {
      alert("Invalid credentials.");
    }
  };

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("registeredUsers"));
    if (storedUsers) {
      setRegisteredUsers(storedUsers);
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const handleForgotPassword = (email) => {
    alert(`Password reset link sent to: ${email}`);
  };

  return (
    <Router>
      <div className="app-container">
        {isAuthenticated && (
          <Sidebar
            toggleSidebar={toggleSidebar}
            sidebarVisible={sidebarVisible}
            setIsAuthenticated={setIsAuthenticated}
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
                  <Login
                    onLogin={handleLogin}
                    onRegister={handleRegister}
                    onForgotPassword={handleForgotPassword}
                  />
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
            <Route path="/logout" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
