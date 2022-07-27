import React, { useState } from "react";
import axios from "axios";

export default function AddNewEmployee(props) {
  const [role, setRole] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [houseNumber, setHouseNumber] = useState("");
  const [postCode, setPostCode] = useState("");
  const [city, setCity] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // send the form data to the backend
    axios
      .post("http://localhost:5005/api/employees", {
        role,
        firstName,
        lastName,
        phone,
        street,
        houseNumber,
        postCode,
        city,
        username,
        password,
      })
      .then((response) => {
        // console.log("get req body info to create new user =>", response);
        // reset the form
        setRole("");
        setFirstName("");
        setLastName("");
        setPhone("");
        setStreet("");
        setHouseNumber("");
        setPostCode("");
        setCity("");
        setUsername("");
        setPassword("");
        // refresh the list of projects in 'ProjectsList'
        props.getAllProjects();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
        <h1>Add New Employee</h1>
        <form onSubmit={handleSubmit}>
          {/* <label for="role">Choose Your Role:</label> */}
          <select
            name="role"
            id="role"
            onChange={(e) => setRole(e.target.value)}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          >
            <option value="manager">manager</option>
            <option value="driver">driver</option>
            <option value="officeWorker">officeWorker</option>
          </select>

          <input
            placeholder="Enter Your Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />

          <input
            placeholder="Enter Your Famimly"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />

          <input
            placeholder="Enter Your phone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />

          <input
            placeholder="Enter the Street"
            type="text"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />

          <input
            placeholder="Enter The HouseNumber"
            type="text"
            value={houseNumber}
            onChange={(e) => setHouseNumber(e.target.value)}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />

          <input
            placeholder="Enter The Postode"
            type="text"
            value={postCode}
            onChange={(e) => setPostCode(e.target.value)}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />

          <input
            placeholder="Enter The City"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />

          <input
            placeholder="Enter The Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />

          <input
            placeholder="Enter The password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />
          <div className="h-[1px] w-full bg-gray-400 my-2" />
          <button
            type="submit"
            className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
          >
            Add New Employee
          </button>
        </form>
      </div>
    </>
  );
}