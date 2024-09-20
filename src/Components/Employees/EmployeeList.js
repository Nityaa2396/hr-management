import React, { useState, useEffect } from "react";
import {
  Table,
  Form,
  Button,
  Pagination,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import "./EmployeeList.css"; // Custom CSS

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [companyFilter, setCompanyFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [entriesPerPage] = useState(10);

  useEffect(() => {
    // Fetch the employee data (use API calls in real application)
    const employeeData = [
      {
        id: 1,
        profile: "profile1.jpg",
        joinDate: "09-08-2021",
        empNo: "IND000055",
        name: "Vishal",
        gender: "M",
        designation: "Pre-sales Executive",
        email: "sales@itpstech.com",
        mobile: "9585852619",
        department: "Sales",
        remarks: "Yet to be Reviewed",
      },
      {
        id: 2,
        profile: "profile2.jpg",
        joinDate: "16-08-2021",
        empNo: "IND000058",
        name: "Dinesh Anand",
        gender: "M",
        designation: "Senior Engineer",
        email: "hr@itpstech.com",
        mobile: "9327627738",
        department: "Administrator",
        remarks: "Yet to be Reviewed",
      },
      {
        id: 3,
        profile: "profile3.jpg",
        joinDate: "04-08-2021",
        empNo: "IND000054",
        name: "Divya",
        gender: "F",
        designation: "Pre-sales Executive",
        email: "sales@itpstech.com",
        mobile: "8364773299",
        department: "Sales",
        remarks: "Yet to be Reviewed",
      },
      // Add more employee records as needed
    ];
    setEmployees(employeeData);
    setFilteredEmployees(employeeData);
  }, []);

  // Filter employees based on company and search term
  useEffect(() => {
    let filtered = employees;
    if (companyFilter !== "All") {
      filtered = filtered.filter((emp) => emp.department === companyFilter);
    }
    if (searchTerm) {
      filtered = filtered.filter(
        (emp) =>
          emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          emp.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    setFilteredEmployees(filtered);
  }, [companyFilter, searchTerm, employees]);

  // Handle pagination
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredEmployees.slice(
    indexOfFirstEntry,
    indexOfLastEntry
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="employee-list">
      <h4>Employee List</h4>
      <div className="filters">
        <Form.Control
          as="select"
          value={companyFilter}
          onChange={(e) => setCompanyFilter(e.target.value)}
          className="company-filter"
        >
          <option value="All">All</option>
          <option value="Sales">Sales</option>
          <option value="Administrator">Administrator</option>
          {/* Add more company options */}
        </Form.Control>
        <Button variant="primary" className="filter-button">
          Filter
        </Button>
        <Form.Control
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <Table striped bordered hover responsive>
        <thead>
          <tr className="space">
            <th>#</th>
            <th>Profile</th>
            <th>Join Date</th>
            <th>Emp#</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Designation</th>
            <th>Email / Mobile</th>
            <th>Department</th>
            <th>Remarks</th>
          </tr>
        </thead>
        <tbody>
          {currentEntries.map((employee, index) => (
            <tr key={employee.id}>
              <td>{indexOfFirstEntry + index + 1}</td>
              <td>
                <img
                  src={employee.profile}
                  alt={employee.name}
                  className="profile-pic"
                />
              </td>
              <td>{employee.joinDate}</td>
              <td>{employee.empNo}</td>
              <td>{employee.name}</td>
              <td>{employee.gender}</td>
              <td>{employee.designation}</td>
              <td>
                {employee.email} / {employee.mobile}
              </td>
              <td>{employee.department}</td>
              <td>
                <Button variant="warning">{employee.remarks}</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="pagination">
        <Pagination>
          {[
            ...Array(
              Math.ceil(filteredEmployees.length / entriesPerPage)
            ).keys(),
          ].map((pageNum) => (
            <Pagination.Item
              key={pageNum + 1}
              active={pageNum + 1 === currentPage}
              onClick={() => paginate(pageNum + 1)}
            >
              {pageNum + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </div>
  );
};

export default EmployeeList;
