import React from "react";
import Sidebar from "../components/Sidebar";

export default function Manager() {
  return (
    <>
      <h2 className="blue-glassmorphism text-white">Manager Access Only</h2>
      <Sidebar />
      {/* <div className="blue-glassmorphism text-white">
        <h2>only available employee</h2>
      </div>

      <div className="blue-glassmorphism text-white">
        <h2>only available vehicle</h2>
      </div> */}
    </>
  );
}
