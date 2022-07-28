import React, { useState, useContext } from "react";
import logo from "../images/logo.png";
import { AiFillPlayCircle } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
import { BsFillEmojiSunglassesFill } from "react-icons/bs";
import Loader from "../components/Loader";
import Navbar2 from "../components/Navbar2";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import axios from "axios";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

// const Input = ({ placeholder, name, type, value, onChange }) => (
//   <input
//     placeholder={placeholder}
//     name={name}
//     type={type}
//     value={value}
//     onChange={(e) => handleChange(e)}
//     className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//   />
// );

export default function Welcome() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { user, storeToken, verifyStoredToken } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = { username, password };
    axios
      .post("http://localhost:5005/api/auth/login", requestBody)
      .then((response) => {
        const token = response.data.authToken;
        storeToken(token);
        verifyStoredToken() //CHECK ROLE HERE?!
          .then(() => {
            axios
              .get(`http://localhost:5005/api/employees/${user._id}`)
              .then((response) => {
                const user = response.data;
                if (user.role === "manager") {
                  navigate("/Dashboard");
                } else navigate("/startshift");
              });
          })
          .catch((err) => {
            const errorDescription = err.response.data.message;
            setErrorMessage(errorDescription);
          });
      });
  };
  const handleUsername = (e) => setUsername(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  return (
    <div>
      <Navbar2 />
      <div className="flex w-full justify-center items-center">
        <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
          <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
            <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
              WELCOME TO EAZYHUB <br /> A Managing System for Logistic Companies.
            </h1>
            <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
              Join our team and enjoy your job & life
            </p>
            <button
              type="button"
              // onClick={loginFormHandle}
              className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
              <AiFillPlayCircle className="text-white mr-2" />
              <p className="text-white text-base font-semibold">Join Us</p>
            </button>

            <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
              <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
                Easy job
              </div>
              <div className={companyCommonStyles}>Good Pay</div>
              <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
                Friendly Team
              </div>
              <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
                Secure
              </div>
              <div className={companyCommonStyles}>No need your car</div>
              <div className={`rounded-br-2xl ${companyCommonStyles}`}>
                30 days vacation
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
            <div className="p-3  justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism">
              <div className="flex justify-between flex-col w-full h-full">
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                    <AiFillCar fontSize={21} color="#fff" />
                  </div>
                  <BsFillEmojiSunglassesFill fontSize={17} color="#fff" />
                </div>

                <div>
                  <p className="text-white font-light text-sm">
                    EAZYHUB
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Premium
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
              <input
              htmlFor="username"
                placeholder="Enter Your Username"
                type="text"
                value={username}
                onChange={handleUsername}
                name="username"
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              />

              <input
              htmlFor="password"
                placeholder="Enter Your Password"
                type="password"
                value={password}
                onChange={handlePassword}
                name="password"
                className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
              />
              <div className="h-[1px] w-full bg-gray-400 my-2" />

              {false ? (
                <Loader />
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
