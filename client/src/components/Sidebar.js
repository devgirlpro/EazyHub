import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sidebarLink">
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div className="sidebarLink">
        <Link to="/employees">Employees</Link>
      </div>

      <div className="sidebarLink">
        <Link to="/vehicles">Vehicles</Link>
      </div>
      <div className="sidebarLink">
        <Link to="/maps">Maps</Link>
      </div>
      <div className="sidebarLink">
        <Link to="/time">TimeManagement</Link>
      </div>
    </div>
  );
}
