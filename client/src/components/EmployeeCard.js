import React from "react";
export default function EmployeeCard(props) {
  // const { employee } = props;
  console.log("props =>", props);
  return (
    <>
      <div className="employeeCard">
        <img src={props.employee.avatar} />
        <h2>Role: {props.employee.role}</h2>
        <h2>
          Name:
          {props.employee.personalInfo?.firstName}
        </h2>
        {props.employee.personalInfo?.lastName}
        <p>Phone: {props.employee.personalInfo?.phone}</p>
        <p>
          Address:
          {props.employee.address?.street} {props.employee.address?.postCode}{" "}
          {props.employee.address?.city}
        </p>
        <p>PersonalNumber: {props.employee.personalNumber}</p>
        <p>
          Availability:{" "}
          {props.employee.available ? " Available" : "unAvailable"}
        </p>
        <p>
          Vehicle:{props.employee.vehicle}
          {/* {props.vehicle.license ? " Available" : "unAvailable"} */}
        </p>
      </div>
    </>
  );
}

// return (
//     <div>
//       <h2>Movie List</h2>
//       {movies.map(movie => {
//         return (
//           <div key={movie._id} className="MovieCard">
//             <h3>{movie.title}</h3>
//             <p>Director: {movie.director}</p>
//             <p>Rating: {movie.IMDBRating}</p>
//             <button onClick={() => deleteMovie(movie._id)} className="btn-delete">
//               Delete
//             </button>
//           </div>
//         );
//       })}
//     </div>
//   );
