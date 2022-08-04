import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import EmployeeCard from "../components/EmployeeCard";
import Sidebar from "../components/Sidebar";
import AddNewEmployee from "../components/AddNewEmployee";
export default function EmployeesPage() {
  const [employeesData, setEmployeesData] = useState([]);
  // const employeInfo = (employee) => {};
  const getAllEmployees = () => {
    // console.log("function begin");
    axios
      .get("/api/employees")
      .then((response) => {
        // console.log("AXIOS FUNCTION =>", response.data);
        setEmployeesData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log("CLIENT STATE =>", employeesData);
  useEffect(() => {
    // console.log("from  useEffect");
    // get all the projects from the server
    getAllEmployees();
  }, []);
  console.log("STATE employeesData =>", employeesData);
  const deleteEmployee = (employeId) => {
    const filterEmployees = employeesData.filter((employee) => {
      return employee._id !== employeId;
    });
    setEmployeesData(filterEmployees);
  };
  return (
    <>
      {/* <h2>Manager Access Only</h2>
      <h2>Employees List</h2> */}
      {/* className="flex w-full justify-center items-center" */}
      <div className="relative md:flex-row ">
        {/* className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12  px-4" */}
        {/* className="flex flex-1 justify-start items-start flex-col mf:mr-10" */}
        {/* className="absolute inset-y-0 left-0" */}
        <div>
          <Sidebar />
        </div>
        <div className="absolute  top-0 right-0 w-90">
          <AddNewEmployee getAllEmployees={getAllEmployees} />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div>
        {employeesData.map((employee) => {
          return (
            <>
              {/* Card Container */}
              <div className="flex flex-wrap justify-center">
                <div
                  key={employee?._id}
                  className="flex flex-col blue-glassmorphism text-white rounded-lg shadow-md  w-full  m-6 overflow-hidden "
                >
                  <EmployeeCard employee={employee} className="h-20 m-6" />
                  <button
                    onClick={() => deleteEmployee(employee._id)}
                    className="text-center px-2 pb-5"
                  >
                    DELETE
                  </button>
                  <br />
                  <Link
                    to={`/employees/${employee._id}`}
                    className="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500"
                  >
                    More Info
                  </Link>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
