import React from "react";
import { useLoaderData } from "react-router-dom";

const ShowList = () => {
  const movies = useLoaderData() || []; // Set default value to an empty array if movies is null or undefined
  console.log(movies);

  return (
    <div>
      <h2 className="text-4xl font-semibold text-center my-20">Show list</h2>
      {movies.map((movie) => (
        <div key={movie.show.id}>
            
        </div>
      ))}
    </div>
  );
};

export default ShowList;