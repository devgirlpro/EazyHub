import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function EmployeeDetailsPage() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5005/api/employees/${id}`)
      .then((response) => {
        console.log(
          "employee Details from employeeDetailsPage AXIOS => ",
          response.data
        );
        setEmployee(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("employeeDetailsState =>", employee);

  return (
    <>
      {employee === null ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h1>EmployeeDetails</h1>
          <h3>Nationality : {employee.personalInfo.nationality}</h3>
          <h4>Role: {employee.role}</h4>
          <h5>Bank: {employee.personalInfo.bank}</h5>
          {/* <Link to={`/`}>
            <button>Edit this Project 📝</button>
          </Link> */}
        </>
      )}
    </>
  );
}
