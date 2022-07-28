import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  return (
    <div className="flex">
      <div
        className={`blue-glassmorphism text-white  h-screen p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } duration-300 relative `}
      >
        <BsArrowLeftShort
          onClick={() => setOpen(!open)}
          className={` text-white text-3xl rounded-full absolute -right-2 top-9 
          cursor-pointer border ${!open && "routate-180"}`}
        />
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

{
  /* <div className="sidebarLink">
        <Link to="/dashboard">Dashboard</Link>
      </div> */
}

// <HiArrowLeft
// className="text-white text-xl rounded-full absolute cursor-pointer
//             p-1 text-3l -right-2 top-9 border cursor-pointer"
// ${!open && routet-180}
// onClich={() => setOpen(!open)}
// />
