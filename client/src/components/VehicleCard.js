import React from "react";

export default function VehicleCard(props) {
  const { vehicle } = props;
  return (
    <>
      <div className="vehicleCard">
        <img src={vehicle.avatar} />
        <p> Licence: {vehicle.license}</p>
        <p>Availability: {vehicle.available ? " Available" : "unAvailable"}</p>
      </div>
    </>
  );
}
