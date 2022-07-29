import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth";
import axios from "axios";
// import { propTypes } from "react-qr-scanner";

export default function Login() {
  console.log("login page");
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
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input type="text" value={username} onChange={handleUsername} />

        <label htmlFor="password">Password: </label>
        <input type="password" value={password} onChange={handlePassword} />

        <button type="submit">Log In</button>
      </form>

      {errorMessage && <h5>{errorMessage}</h5>}

      <h3>Don't have an account?</h3>
      <Link to="/signup">Signup</Link>
    </div>
  );
}
