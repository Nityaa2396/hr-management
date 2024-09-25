import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import DepartmentSummary from "./DepartmentSummary";
import "./../styles/Dashboard.css";

const Dashboard = () => {
  // Example department data
  const [departmentCounts, setDepartmentCounts] = useState({
    Accounts: 1,
    Development: 1,
    Administrator: 1,
    Sales: 4,
  });

  const totalEmployees = 7; // Assuming a fixed number of employees
  const totalPresent = 0; // Assuming no one is present for now
  const totalAbsent = totalEmployees - totalPresent;

  return (
    <Container fluid className="dashboard">
      <Row className="mb-4">
        <Col>
          <h1>Dashboard</h1>
        </Col>
      </Row>

      {/* Top Summary Cards */}
      <Row className="mb-4 summary">
        <Col xs={12} md={4}>
          <Card className="summary-card employee">
            <Card.Body>
              <Card.Title>Total Employees</Card.Title>
              <h2>{totalEmployees}</h2>
              <ProgressBar
                now={(totalEmployees / totalEmployees) * 100}
                className="progress-bar-purple"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="summary-card present">
            <Card.Body>
              <Card.Title>Total Present</Card.Title>
              <h2>{totalPresent}</h2>
              <ProgressBar
                now={(totalPresent / totalEmployees) * 100}
                className="progress-bar-blue"
              />
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="summary-card absent">
            <Card.Body>
              <Card.Title>Total Absent</Card.Title>
              <h2>{totalAbsent}</h2>
              <ProgressBar
                now={(totalAbsent / totalEmployees) * 100}
                className="progress-bar-green"
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Department Summary */}
      <Row>
        <Col xs={12}>
          <DepartmentSummary departmentCounts={departmentCounts} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
