import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import "./EmployeeCreate.css"; // Custom CSS for this page

const EmployeeCreate = () => {
  // State for form steps
  const [step, setStep] = useState(1);

  // Function to handle next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Function to handle previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (API calls, etc.)
    alert("Form Submitted Successfully!");
  };

  return (
    <div className="employee-create">
      {/* Stepper Header */}
      <div className="step-header">
        <div className={`step ${step === 1 ? "active" : ""}`}>
          Step 1 <br /> Basic Details.
        </div>
        <div className={`step ${step === 2 ? "active" : ""}`}>
          Step 2 <br /> Education Qualification.
        </div>
        <div className={`step ${step === 3 ? "active" : ""}`}>
          Step 3 <br /> Work Experience.
        </div>
        <div className={`step ${step === 4 ? "active" : ""}`}>
          Step 4 <br /> Bank Details.
        </div>
        <div className={`step ${step === 5 ? "active" : ""}`}>
          Step 5 <br /> Proof Details.
        </div>
      </div>

      <Container>
        <Form
          className="employee-form"
          onSubmit={step === 5 ? handleSubmit : undefined}
        >
          {/* Step 1: Basic Details */}
          {step === 1 && (
            <>
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
                      Card No (8 digits only){" "}
                      <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Enter Card Number"
                      pattern="^\d{8}$"
                      title="Card number must be exactly 8 digits"
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
              {/* Add more fields as needed */}
            </>
          )}
          {/* Step 2: Education Qualification */}
          {step === 2 && (
            <>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="degree">
                    <Form.Label>
                      Highest Degree <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Enter Degree"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="university">
                    <Form.Label>
                      University <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Enter University"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </>
          )}
          {/* Step 3: Work Experience */}
          {step === 3 && (
            <>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="experience">
                    <Form.Label>
                      Total Experience (in years){" "}
                      <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      required
                      placeholder="Enter Experience"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="previousCompany">
                    <Form.Label>
                      Previous Company <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Enter Company"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </>
          )}
          {/* Step 4: Bank Details */}
          {step === 4 && (
            <>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="bankName">
                    <Form.Label>
                      Bank Name <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Enter Bank Name"
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="accountNo">
                    <Form.Label>
                      Account Number <span className="required">*</span>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      required
                      placeholder="Enter Account Number"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </>
          )}
          {/* Step 5: Proof Details */}
          {step === 5 && (
            <>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group controlId="idProof">
                    <Form.Label>
                      ID Proof <span className="required">*</span>
                    </Form.Label>
                    <Form.Control type="file" required />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="addressProof">
                    <Form.Label>
                      Address Proof <span className="required">*</span>
                    </Form.Label>
                    <Form.Control type="file" required />
                  </Form.Group>
                </Col>
              </Row>
            </>
          )}
          {/* Navigation Buttons */}
          <Row>
            <Col md={12} className="text-end">
              {step > 1 && (
                <Button variant="secondary" onClick={prevStep} className="me-2">
                  Previous
                </Button>
              )}
              {step < 5 && (
                <Button variant="primary" onClick={nextStep}>
                  Save and Next
                </Button>
              )}
              {step === 5 && (
                <Button variant="success" type="submit">
                  Submit
                </Button>
              )}
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default EmployeeCreate;
