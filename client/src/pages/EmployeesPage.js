import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EmployeeCard from "../components/EmployeeCard";
import Sidebar from "../components/Sidebar";

export default function EmployeesPage() {
  const [employeesData, setEmployeesData] = useState([]);

  // const employeInfo = (employee) => {};

  useEffect(() => {
    axios
      .get("/api/employees")
      .then((response) => {
        console.log("AXIOS client =>", response.data);
        setEmployeesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log("STATE employeesData =>", employeesData);

  const deleteEmployee = (employeId) => {
    const filterEmployees = employeesData.filter((employee) => {
      return employee._id !== employeId;
    });
    setEmployeesData(filterEmployees);
  };
  //some changes
  return (
    <>
      <h2>Manager Access Only</h2>
      <h2>Employees List</h2>
      <Sidebar />
      {employeesData.map((employee) => {
        return (
          <div key={employee?._id}>
            <EmployeeCard employee={employee} />
            <button onClick={() => deleteEmployee(employee._id)}>DELETE</button>
            <Link to={`/employees/${employee._id}`}>More Info</Link>
          </div>
        );
      })}
    </>
  );
}
