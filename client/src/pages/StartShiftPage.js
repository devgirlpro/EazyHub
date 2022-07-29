import React, { useState, useContext, useEffect } from "react";
import { QrCode } from "../components/index";
import { AuthContext } from "../context/auth";
import axios from "axios";

export default function StartShift() {
  const [isShown, setIsShown] = useState(false);
  const { user } = useContext(AuthContext);
  const [userDetails,setUserDetails] = useState ()

  useEffect(() => {
    // console.log("from  useEffect");
    // get all the projects from the server
    
    axios
    .get(`http://localhost:5005/api/employees/${user?._id}`)
    .then((response) => {
      setUserDetails(response.data);
    });
  }, [user]);

  const handleClick = (event) => {
    // toggle shown state
    setIsShown((current) => !current);

    // or simply set it to true
    // setIsShown(true);
  };

  console.log(userDetails)
  return (
    <div class="flex justify-center pt-6 pb-10">
      <div class="max-w-xs bg-white rounded-lg border border-gray-200 bg-gray-800 dark:border-gray-700 pt-10 ">
        <div class="flex flex-col items-center pb-5">
          <img
            class="mb-3 w-24 h-24 rounded-full shadow-lg"
            src={userDetails?.avatar}
            alt="Avatar image"
          />
          <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {userDetails?.personalInfo?.firstName}
            <span> </span>
            {userDetails?.personalInfo?.lastName}
          </h5>
          <span class="text-sm text-gray-500 dark:text-gray-400">{userDetails?.role}</span>
          <div class="flex mt-4 space-x-3 lg:mt-3 pl-2 pr-2">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-white font-light text-sm"
              onClick={handleClick}
            >
              Scan Your Vehicle
            </button>
            <button onclick="location.href='http://localhost:3000'" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-white font-light text-sm">
              Start Shift
            </button>
          </div>
        
          
        </div>
        <span class="flex flex-col items-center px-8 text-center text-l font-small text-gray-900 dark:text-white">Hey {userDetails?.personalInfo?.firstName}, check the tire pressure of the car regularly!</span>
      
        <div class="flex flex-col items-center pt-6 pb-5">
          {isShown && <QrCode />}
        </div>
      </div>
    </div>
  );
}

function Box() {
  return (
    <div>
      <h2>Box</h2>
    </div>
  );
}
