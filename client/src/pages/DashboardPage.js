import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <h2>Manager Access Only</h2>
      <div>Dashboard</div>
      <Sidebar />
    </>
  );
}
