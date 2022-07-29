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
      .get("http://localhost:5005/api/employees")
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
      <div class="grid grid-cols-7 gap-7" >
        <div >
          <div>
            <Sidebar />
            <AddNewEmployee getAllEmployees={getAllEmployees} />
          </div>

        </div>
        {employeesData.map((employee) => {
        return (
          <>
            <div  key={employee?._id}>


              
              <EmployeeCard employee={employee} />

              <button onClick={() => deleteEmployee(employee._id)}>
                DELETE
              </button>

              <Link to={`/employees/${employee._id}`}>More Info</Link>
            </div>
          </>
        );
      })}
      </div>
      {/* <div className="flex w-full justify-center items-center">
        <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12  px-4"></div> */}
      {/* </div> */}

      
    </>
  );
}
