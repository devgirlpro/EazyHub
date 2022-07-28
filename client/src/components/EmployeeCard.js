import React from "react";
export default function EmployeeCard(props) {
  // const { employee } = props;
  console.log("props =>", props);
  return (
    <>
      <section class="bg-gray-900 h-screen flex justify-center items-center gap-x-16 text-white">
        <div class="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          <div class="relative preserve-3d group-hover:my-rotate-y-180 w-full h-full duration-1000">
            <div class="absolute backface-hidden border-2 w-full h-full">
              <img src={props.employee.avatar} class="w-full h-full" />
            </div>

            <div class="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
              <div class="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h2 className="text-3xl font-semibold">
                  Name:
                  {props.employee.personalInfo?.firstName}
                </h2>
                {props.employee.personalInfo?.lastName}
                <p class="my-2">Phone: {props.employee.personalInfo?.phone}</p>
                <p>
                  Address:
                  {props.employee.address?.street}{" "}
                  {props.employee.address?.postCode}{" "}
                  {props.employee.address?.city}
                </p>
                <p>PersonalNumber: {props.employee.personalNumber}</p>
                <p>
                  Availability:{" "}
                  {props.employee.available ? " Available" : "unAvailable"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

{
  /* <div className="employeeCard">
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
      </div> */
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
