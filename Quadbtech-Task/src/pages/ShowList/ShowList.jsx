import React from "react";
import { useLoaderData } from "react-router-dom";
import Summary from "./Summary";

const ShowList = () => {
  const movies = useLoaderData() || [];
  console.log(movies);

  return (
    <section className="my-20">
      <h2 className="text-center font-semibold text-4xl mb-16">
        Show all list
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div
            className="bg-white shadow-lg border-gray-100 border rounded-3xl p-8 flex flex-col"
            key={movie.show.id}
          >
            <div className="h-48 w-full mb-4 overflow-hidden rounded-3xl">
              {movie.show.image && movie.show.image.medium && (
                <img
                  src={movie.show.image.original}
                  className="object-cover h-full w-full"
                  alt=""
                />
              )}
            </div>
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-3xl font-bold">{movie.show.name}</h2>
              <div className="bg-yellow-400 font-bold rounded-xl p-2">
                {movie.show.rating.average}
              </div>
            </div>
            <div className="mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-400">Genres:</span>
                <div className="text-sm text-gray-800">
                  {movie.show.genres.map((genre) => (
                    <span className="ml-1" key={genre}>
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
              <div className="text-lg text-gray-800">
                Premiered: {movie.show.premiered}
              </div>
            </div>
            <Summary summary={movie.show.summary} />
            <div className="flex justify-between items-center">
              <div className="flex mt-auto text-2xl font-bold text-a">
                {movie.show.runtime && <p>Runtime: {movie.show.runtime}</p>}
              </div>
              <button className="bg-yellow-400 btn">Button</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShowList;