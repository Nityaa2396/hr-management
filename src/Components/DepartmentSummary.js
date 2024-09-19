// src/components/DepartmentSummary.js
import React from "react";
import "../styles/DepartmentSummary.css";

const DepartmentSummary = ({ departmentCounts }) => {
  const departments = [
    { name: "Accounts", count: departmentCounts["Accounts"] || 0 },
    { name: "Development", count: departmentCounts["Development"] || 0 },
    { name: "Admin", count: departmentCounts["Admin"] || 0 },
    { name: "Sales", count: departmentCounts["Sales"] || 0 },
    { name: "Others", count: departmentCounts["Others"] || 0 },
  ];

  return (
    <div className="department-summary">
      <h2>Department Summary</h2>
      <div className="department-blocks">
        {departments.map((dept) => (
          <div key={dept.name} className="department-block">
            {dept.name}: {dept.count}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DepartmentSummary;
