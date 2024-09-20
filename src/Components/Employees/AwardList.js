import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import DataTable from "react-data-table-component";

// Sample data for the table
const data = [
  {
    id: 1,
    employeeName: "Kalaiarasi",
    empCode: "IND000053",
    awardName: "Best Performance",
    gift: "cash",
    awardDate: "31/08/2021",
  },
  {
    id: 2,
    employeeName: "Divya",
    empCode: "IND000054",
    awardName: "Best Performance",
    gift: "Dinner set",
    awardDate: "31/08/2021",
  },
];

// Define the table columns
const columns = [
  {
    name: "#",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Employee Name",
    selector: (row) => row.employeeName,
    sortable: true,
  },
  {
    name: "Emp Code",
    selector: (row) => row.empCode,
    sortable: true,
  },
  {
    name: "Award Name",
    selector: (row) => row.awardName,
    sortable: true,
  },
  {
    name: "Gift",
    selector: (row) => row.gift,
    sortable: true,
  },
  {
    name: "Award Date",
    selector: (row) => row.awardDate,
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <>
        <Button variant="success" size="sm" className="me-2">
          <i className="fas fa-edit"></i>
        </Button>
        <Button variant="danger" size="sm">
          <i className="fas fa-trash"></i>
        </Button>
      </>
    ),
  },
];

const AwardsList = () => {
  const [filterText, setFilterText] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateUpto, setDateUpto] = useState("");

  // Filter data based on text and date inputs
  const filteredData = data.filter((item) => {
    const matchesText = item.employeeName
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const matchesDate =
      (!dateFrom || new Date(item.awardDate) >= new Date(dateFrom)) &&
      (!dateUpto || new Date(item.awardDate) <= new Date(dateUpto));
    return matchesText && matchesDate;
  });

  return (
    <div className="p-4">
      <h4>Awards List</h4>
      <p>2 of 2 results found.</p>

      {/* Filter Section */}
      <Row className="mb-4">
        <Col md={3}>
          <Form.Group controlId="dateFrom">
            <Form.Label>Date From</Form.Label>
            <Form.Control
              type="date"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={3}>
          <Form.Group controlId="dateUpto">
            <Form.Label>Date Upto</Form.Label>
            <Form.Control
              type="date"
              value={dateUpto}
              onChange={(e) => setDateUpto(e.target.value)}
            />
          </Form.Group>
        </Col>
        <Col md={3} className="d-flex align-items-end">
          <Button variant="dark" className="me-2">
            Filter
          </Button>
          <Button variant="primary">Add Awards</Button>
        </Col>
      </Row>

      {/* DataTable Component */}
      <DataTable
        columns={columns}
        data={filteredData}
        pagination
        highlightOnHover
        subHeader
        subHeaderComponent={
          <div className="d-flex w-100">
            <span className="me-auto">
              Showing {filteredData.length} entries
            </span>
            <Form.Control
              type="text"
              placeholder="Search..."
              className="w-25"
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
          </div>
        }
      />
    </div>
  );
};

export default AwardsList;
