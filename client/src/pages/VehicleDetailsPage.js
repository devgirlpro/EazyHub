import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function VehicleDetailsPage() {
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    axios
      .get(`/api/vehicles/${id}`)
      .then((response) => {
        console.log(
          "VEHICLE DETAILS FROM VEHICLEDETAILSPAGE =>",
          response.data
        );
        setVehicle(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log("vehicle details page =>", vehicle);

  return (
    <>
      {vehicle === null ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <h2>Damage Info Page</h2>
          <img src={vehicle.avatar} />
          <p>Description : {vehicle.damageDescription}</p>
        </>
      )}
    </>
  );
}
