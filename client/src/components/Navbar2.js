import React from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../images/logo.png";

export default function Navbar2() {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-48 cursor-pointer" />
      </div>
      <div className="text-white md:flex hidden list-none flex-row justify-around items-center flex-initial">
        <NavLink to="/" className="w-48 cursor-pointer">
          HOME
        </NavLink>

        <NavLink to="/about" className="w-32 cursor-pointer">
          About
        </NavLink>

        <NavLink to="/contact" className="w-32 cursor-pointer">
          Contact Us
        </NavLink>

        <NavLink
          to="/login"
          className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          Login
        </NavLink>
      </div>

      <div lassName="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}

        {toggleMenu && (
          <div
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
                      flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <NavLink to="/" className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
              HOME
            </NavLink>

            <NavLink to="/about" className="text-xl w-full my-2">
              {/* <AiOutlineClose onClick={() => setToggleMenu(false)} /> */}
              About
            </NavLink>

            <NavLink to="/contact" className="text-xl w-full my-2">
              {/* <AiOutlineClose onClick={() => setToggleMenu(false)} /> */}
              Contact Us
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
