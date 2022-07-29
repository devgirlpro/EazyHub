import React from "react";
import { Link } from "react-router-dom";
import { GiSandsOfTime } from "react-icons/gi";
import { BsPinMap } from "react-icons/bs";

import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { AiOutlineSmile } from "react-icons/ai";
import { BsArrowLeftShort } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import logo from "../images/logo.png";

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
          cursor-pointer border ${!open && "rotate-180"}`}
        />

        <div className="inline-flex">
          <img
            src={logo}
            className={`text-3xl rounded cursor-pointer block float-left mr-2 
          duration-500 ${open && "rotate-[360deg]"}`}
          />
        </div>

        <div
          className={`flex items-center rounded-md bg-light-white 
        mt-6 ${!open ? "px-2.5" : "px-4"} py-2`}
        >
          <AiOutlineSearch
            className={`text-white text-lg block 
          float-left cursor-pointer ${!open && "mr-2"}`}
          />
          <input
            type={"search"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white 
              focus:outline-none ${!open && "hidden"}`}
          />
        </div>

        <div className="pt-2">
          <div
            className="text-gray-300 text-sm flex 
            item-center gap-x-4 cursor-pointer p-2 
            hover:bg-light-white rounded-md rounded-md mt-2"
          >
            <span className="text-2xl block float-left">
              <BsFillPersonLinesFill />
            </span>
            <Link
              to="/employees"
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Employees
            </Link>
          </div>

          <div
            className="text-gray-300 text-sm flex 
            item-center gap-x-4 cursor-pointer p-2 
            hover:bg-light-white rounded-md rounded-md mt-2"
          >
            <span className="text-2xl block float-left">
              <AiFillCar />
            </span>
            <Link
              to="/vehicles"
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Vehicles
            </Link>
          </div>

          <div
            className="text-gray-300 text-sm flex 
            item-center gap-x-4 cursor-pointer p-2 
            hover:bg-light-white rounded-md rounded-md mt-2"
          >
            <span className="text-2xl block float-left">
              <BsPinMap />
            </span>
            <Link
              to="/maps"
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              Maps
            </Link>
          </div>

          <div
            className="text-gray-300 text-sm flex 
            item-center gap-x-4 cursor-pointer p-2 
            hover:bg-light-white rounded-md rounded-md mt-2"
          >
            <span className="text-2xl block float-left">
              <GiSandsOfTime />
            </span>
            <Link
              to="/time"
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              TimeManagement
            </Link>
          </div>
        </div>
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
