import React, { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import "./EmployeeImports.css";

const EmployeeImports = () => {
  const [date, setDate] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleReset = () => {
    setDate("");
    setFile(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !file) {
      alert("Please fill out all required fields.");
      return;
    }
    // Process the form data (upload file, etc.)
    console.log("Date:", date);
    console.log("File:", file);
  };

  return (
    <Container>
      <Row className="content">
        <Col md={6}>
          <h4>Employees</h4>
          <small>Import</small>

          <Form onSubmit={handleSubmit} className="import">
            <Form.Group controlId="formDate" className="form-group">
              <Form.Label>
                Date <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="form-group">
              <Form.Label>
                Attach Excel <span className="text-danger">*</span>
              </Form.Label>
              <Form.Control
                type="file"
                onChange={handleFileChange}
                accept=".xls,.xlsx"
                required
              />
            </Form.Group>

            <p className="sample-file-link">
              Sample file format.{" "}
              <a href="/sample.xlsx" className="text-danger" download>
                <i className="fa fa-file-pdf"></i> Click here
              </a>
            </p>

            <div className="d-flex">
              <Button variant="secondary" onClick={() => window.history.back()}>
                Cancel
              </Button>
              <Button variant="outline-secondary" onClick={handleReset}>
                Reset
              </Button>
              <Button type="submit" variant="dark">
                Import
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default EmployeeImports;
