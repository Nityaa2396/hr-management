import React from "react";
import Timer from "./Timer";
import "../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1>Welcome to the Dashboard</h1>
      <Timer />
    </div>
  );
};

export default Dashboard;
