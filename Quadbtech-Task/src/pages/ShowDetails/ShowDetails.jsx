import React from "react";
import { useParams, useLoaderData, Link } from "react-router-dom";
import Summary from "../ShowList/Summary";

const ShowDetails = () => {
  const { id } = useParams();
  const movies = useLoaderData();

  // Find the movie with the matching ID
  const movie = movies.find((movie) => movie.show.id == id);

  if (!movie) {
    return <div className="my-20">Movie not found</div>;
  }

  return (
    <div className="py-[12rem] px-2 flex md:flex-row flex-col xl:px-[25rem] justify-center items-center">
      {movie.show.image && movie.show.image.original && (
        <img
          src={movie.show.image.original}
          className="object-cover h-auto w-[30rem]"
          alt="Image not Found"
        />
      )}
      <div className="px-12 py-12 justify-center">
        <h2 className="text-[3rem]">{movie.show.name}</h2>
        <Summary summary={movie.show.summary} />
        <div className="py-5">
          <Link to="/" className="bg-yellow-400 btn w-[10rem] mr-2">
            Go Back
          </Link>
          <Link
            to={`/buyticket/${movie.show.id}`}
            className="bg-yellow-400 btn w-[10rem]"
          >
            Book Ticket
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
