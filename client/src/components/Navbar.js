import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        HOME
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        ABOUT
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        Contact
      </NavLink>

      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "selected" : "")}
      >
        Login
      </NavLink>
    </nav>
  );
}
