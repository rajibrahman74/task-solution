import React from "react";
import { useParams, useLocation } from "react-router-dom";

const ShowDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { movie } = location.state || {};

  return (
    <div>
      <h1 className="text-5xl text-center font-semibold">
        Show Details: {movie && movie.show.name}
      </h1>
      {movie && (
        <div>
          <h2>{movie.show.name}</h2>
          <p>{movie.show.summary}</p>
          {/* Render the rest of the movie details */}
        </div>
      )}
    </div>
  );
};

export default ShowDetails;