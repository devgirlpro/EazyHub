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
          <div className="flex flex-col blue-glassmorphism text-white rounded-lg shadow-md    m-6 overflow-hidden ">
            <h1 className="text-center text-3xl">PersonalInfo</h1>
            <h3>Nationality : {employee.personalInfo.nationality}</h3>
            <h4>Role: {employee.role}</h4>
            <h5>Bank: {employee.personalInfo.bank}</h5>
            <p>Iban: {employee.personalInfo.iban}</p>
            <p>Email: {employee.personalInfo.email} </p>
            <p>IdNumber: {employee.personalInfo.idNumber}</p>
            <p>
              DrivingLicenseNumber: {employee.personalInfo.drivingLicenseNumber}
            </p>
            <p>TaxId: {employee.personalInfo.taxId}</p>
            <p>
              SocialInsuranceNumber:{" "}
              {employee.personalInfo.socialInsuranceNumber}{" "}
            </p>
            <p>healthInsurance: {employee.personalInfo.healthInsurance}</p>
            <p>Entry: {employee.personalInfo.entry}</p>
          </div>

          <div className="flex flex-col blue-glassmorphism text-white rounded-lg shadow-md    m-6 overflow-hidden ">
            <h1 className="text-center text-3xl">Address</h1>
            <h3>Address : {employee.address.street}</h3>
            <h4>{employee.address.houseNumber}</h4>
            <h5>Bank: {employee.address.postCode}</h5>
            <p>Iban: {employee.address.city}</p>
          </div>
          {/* <Link to={`/`}>
            <button>Edit this Project 📝</button>
          </Link> */}
        </>
      )}
    </>
  );
}
