import React from "react";
export default function EmployeeCard(props) {
  const { employee } = props;

  return (
    <>
      <div className="employeeCard">
        <img src={employee.avatar} />
        <h2>
          Name:
          {employee.personalInfo?.firstName} {employee.personalInfo?.lastName}
        </h2>
        <p>Phone: {employee.personalInfo?.phone}</p>
        <p>
          Address:
          {employee.address?.street} {employee.address?.postCode}{" "}
          {employee.address?.city}
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
