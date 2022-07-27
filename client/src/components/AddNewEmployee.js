import React, { useState } from "react";
import axios from "axios";

export default function AddNewEmployee(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // send the form data to the backend
    axios
      .post("/api/employees", {
        firstName,
        lastName,
        phone,
        username,
        password,
      })
      .then((response) => {
        console.log(response);
        // reset the form
        setFirstName("");
        setLastName("");
        setPhone("");
        setUsername("");
        setPassword("");
        // refresh the list of projects in 'ProjectsList'
        props.getAllProjects();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <h1>Add New Employee</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <input
          type="tesxt"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Add This Employee ➕</button>
      </form>
    </>
  );
}
