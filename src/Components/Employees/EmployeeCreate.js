import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./EmployeeCreate.css"; // Custom CSS for this page

const EmployeeCreate = () => {
  return (
    <div className="employee-create">
      {/* Stepper Header */}
      <div className="step-header">
        <div className="step active">
          Step 1 <br /> Basic Details.
        </div>
        <div className="step">
          Step 2 <br /> Education Qualification.
        </div>
        <div className="step">
          Step 3 <br /> Work Experience.
        </div>
        <div className="step">
          Step 4 <br /> Bank Details.
        </div>
        <div className="step">
          Step 5 <br /> Proof Details.
        </div>
      </div>

      {/* Form */}
      <Container>
        <Form className="employee-form">
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="empNo">
                <Form.Label>
                  Emp No <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter Employee Number"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="presentAddress">
                <Form.Label>
                  Present Address <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter Present Address"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="cardNo">
                <Form.Label>
                  Card No (8 digits only) <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter Card Number"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="permanentAddress">
                <Form.Label>
                  Permanent Address <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter Permanent Address"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="fullName">
                <Form.Label>
                  Full Name <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter Full Name"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="city">
                <Form.Label>
                  City <span className="required">*</span>
                </Form.Label>
                <Form.Control as="select" required>
                  <option value="">Choose a City</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="fatherName">
                <Form.Label>
                  Father Name <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter Father's Name"
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="pincode">
                <Form.Label>
                  Pincode <span className="required">*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Enter Pincode"
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="email">
                <Form.Label>
                  Email <span className="required">*</span>
                </Form.Label>
                <Form.Control type="email" required placeholder="Enter Email" />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group controlId="companyName">
                <Form.Label>
                  Company Name <span className="required">*</span>
                </Form.Label>
                <Form.Control as="select" required>
                  <option value="">Choose a Company</option>
                  <option value="company1">Company 1</option>
                  <option value="company2">Company 2</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default EmployeeCreate;
