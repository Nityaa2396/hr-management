import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import DataTable from "react-data-table-component";
import "./NoticeList.css";

// Sample data for the table
const data = [
  {
    id: 1,
    title: "Company Innovation Award Function",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    status: "Active",
    createdOn: "2021/03/08",
  },
  {
    id: 2,
    title: "Attention: WFH User Attendance Verification",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    status: "Active",
    createdOn: "2021/03/08",
  },
];

// Define the table columns
const columns = [
  {
    name: "#",
    selector: (row) => row.id,
    sortable: true,
    width: "50px",
  },
  {
    name: "Title",
    selector: (row) => row.title,
    sortable: true,
  },
  {
    name: "Description",
    selector: (row) => row.description,
    sortable: true,
    wrap: true,
  },
  {
    name: "Status",
    selector: (row) => row.status,
    sortable: true,
  },
  {
    name: "Created on",
    selector: (row) => row.createdOn,
    sortable: true,
  },
  {
    name: "Actions",
    cell: (row) => (
      <div className="action-buttons">
        <Button variant="success" size="sm" className="me-2">
          <i className="fas fa-pen"></i>
        </Button>
        <Button variant="danger" size="sm">
          <i className="fas fa-trash"></i>
        </Button>
      </div>
    ),
    width: "150px",
  },
];

const NoticeList = () => {
  const [filterText, setFilterText] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateUpto, setDateUpto] = useState("");

  // Filter data based on search and date inputs
  const filteredData = data.filter((item) => {
    const matchesText = item.title
      .toLowerCase()
      .includes(filterText.toLowerCase());
    const matchesDate =
      (!dateFrom || new Date(item.createdOn) >= new Date(dateFrom)) &&
      (!dateUpto || new Date(item.createdOn) <= new Date(dateUpto));
    return matchesText && matchesDate;
  });

  return (
    <div className="p-4">
      <h4>Notice List</h4>
      <p>
        {filteredData.length} of {data.length} results found.
      </p>

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
        </Col>
        <Col md={3} className="d-flex align-items-end justify-content-end">
          <Button variant="primary">Add New Notice</Button>
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

export default NoticeList;
