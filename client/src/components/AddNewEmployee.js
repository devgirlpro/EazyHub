import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";







export default function Signup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [street, setStreet] = useState('')
  const [houseNumber, setHouseNumber] = useState('')
  const [postCode, setPostCode] = useState('')
  const [city, setCity] = useState('')


  const [errorMessage, setErrorMessage] = useState(undefined)

  const navigate = useNavigate()

const handleSubmit = e => { 
  e.preventDefault()
  const requestBody = { username, password, role, firstName, lastName, phone, street, houseNumber, postCode, city, }
  axios.post('http://localhost:5005/api/auth/signup', requestBody)
    // .then(response => { console.log(response)
    //   navigate('/login')
    // })
    
    // .catch(err => {
    //   const errorDescription = err.response.data.message
    //   setErrorMessage(errorDescription)
    // })
}

const handleRole = e => setRole(e.target.value)
const handleFirstName = e => setFirstName(e.target.value)
const handleLastName = e => setLastName(e.target.value)
const handlePhone = e => setPhone(e.target.value)
const handleStreet = e => setStreet(e.target.value)
const handleHouseNumber = e => setHouseNumber(e.target.value)
const handlePostCode = e => setPostCode(e.target.value)
const handleCity = e => setCity(e.target.value)
const handleUsername = e => setUsername(e.target.value)
const handlePassword = e => setPassword(e.target.value)


return (
  
      <div>
    <h1>Signup</h1>
    <form onSubmit={handleSubmit}>
      <label htmlFor="role">Role: </label>
      <input type="text" value={role} onChange={handleRole} />

      <label htmlFor="firstName">FirstName: </label>
      <input type="text" value={firstName} onChange={handleFirstName} />

      <label htmlFor="lastName">LastName: </label>
      <input type="text" value={lastName} onChange={handleLastName} />

      <label htmlFor="phone">Phone: </label>
      <input type="text" value={phone} onChange={handlePhone} />

      <label htmlFor="street">Street: </label>
      <input type="text" value={street} onChange={handleStreet} />

      <label htmlFor="houseNumber">HouseNumber: </label>
      <input type="text" value={houseNumber} onChange={handleHouseNumber} />

      <label htmlFor="postCode">PostCode: </label>
      <input type="text" value={postCode} onChange={handlePostCode} />

      <label htmlFor="city">City: </label>
      <input type="text" value={city} onChange={handleCity} />

      <label htmlFor="username">Username: </label>
      <input type="text" value={username} onChange={handleUsername} />

      <label htmlFor="password">Password: </label>
      <input type="password" value={password} onChange={handlePassword} />

      <button type="submit">Sign Up</button>
    </form>

    {errorMessage && <h5>{errorMessage}</h5>}

    <h3>Already have an account?</h3>
    <Link to='/login'>Login</Link>
  </div>
)
}


































// export default function AddNewEmployee(props) {
//   const [role, setRole] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [street, setStreet] = useState("");
//   const [houseNumber, setHouseNumber] = useState("");
//   const [postCode, setPostCode] = useState("");
//   const [city, setCity] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate()

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // send the form data to the backend
//     // const requestBody = { username, password, }
//     axios
//       .post("http://localhost:5005/api/employees",  {
//         role,
//         firstName,
//         lastName,
//         phone,
//         street,
//         houseNumber,
//         postCode,
//         city,
//         username,
//         password,
//       })
//       .then((response) => {
//         // console.log("get req body info to create new user =>", response);
//         // reset the form
//         setRole("");
//         setFirstName("");
//         setLastName("");
//         setPhone("");
//         setStreet("");
//         setHouseNumber("");
//         setPostCode("");
//         setCity("");
//         setUsername("");
//         setPassword("");
//         // refresh the list of projects in 'ProjectsList'
//         props.getAllProjects();
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <>
//       <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
//         <h1>Add New Employee</h1>
//         <form onSubmit={handleSubmit}>
//           {/* <label for="role">Choose Your Role:</label> */}
//           <select
//             name="role"
//             id="role"
//             onChange={(e) => setRole(e.target.value)}
//             className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//           >
//             <option value="manager">manager</option>
//             <option value="driver">driver</option>
//             <option value="officeWorker">officeWorker</option>
//           </select>

//           <input
//             placeholder="Enter Your Name"
//             type="text"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//           />

//           <input
//             placeholder="Enter Your Famimly"
//             type="text"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//           />

//           <input
//             placeholder="Enter Your phone"
//             type="text"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//           />

//           <input
//             placeholder="Enter the Street"
//             type="text"
//             value={street}
//             onChange={(e) => setStreet(e.target.value)}
//             className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//           />

//           <input
//             placeholder="Enter The HouseNumber"
//             type="text"
//             value={houseNumber}
//             onChange={(e) => setHouseNumber(e.target.value)}
//             className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//           />

//           <input
//             placeholder="Enter The Postode"
//             type="text"
//             value={postCode}
//             onChange={(e) => setPostCode(e.target.value)}
//             className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//           />

//           <input
//             placeholder="Enter The City"
//             type="text"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//           />

//           <input
//             placeholder="Enter The Username"
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//           />

//           <input
//             placeholder="Enter The password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
//           />
//           <div className="h-[1px] w-full bg-gray-400 my-2" />
//           <button
//             type="submit"
//             className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
//           >
//             Add New Employee
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }
