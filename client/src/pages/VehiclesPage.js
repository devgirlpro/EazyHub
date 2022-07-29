import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import VehicleCard from "../components/VehicleCard";
import Sidebar from "../components/Sidebar";
export default function VehiclesPage() {
  const [vehiclesData, setVehiclesData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5005/api/vehicles")
      .then((response) => {
        console.log("AXIOS Client Vehicles =>", response.data);
        setVehiclesData(response.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log("VEHICLES DATA FROM STATE =>", vehiclesData);
  const deleteVehicle = (vehicleId) => {
    const filterVehicles = vehiclesData.filter((vehicle) => {
      return vehicle._id !== vehicleId;
    });
    setVehiclesData(filterVehicles);
  };
  console.log("VEHICLES DATA =>", vehiclesData);
  return (
    <>
      {/* <h2>Manager Access Only</h2>
      <h2>Vehicles List</h2> */}
      <div className="flex flex-wrap justify-center">
        <div className="relative md:flex-row ">
          <Sidebar />
          {vehiclesData.map((vehicle) => {
            return (
              <div
                key={vehicle?._id}
                className="flex flex-col blue-glassmorphism text-white rounded-lg shadow-md  w-full  m-6 overflow-hidden "
              >
                <VehicleCard vehicle={vehicle} className="h-20 m-6" />
                <button onClick={() => deleteVehicle(vehicle._id)}>
                  Delete
                </button>
                <Link to={`/vehicles/${vehicle._id}`}>Damage Info</Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}