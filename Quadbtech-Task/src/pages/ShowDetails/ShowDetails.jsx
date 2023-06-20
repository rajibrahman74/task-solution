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
        <div className="py-[12rem] flex md:flex-row flex-col lg:px-[25rem] justify-center h-screen">        
            <img
                src={movie.show.image.original}
                className="object-cover h-[40rem] w-[30rem]"
                alt=""
            />
            <div className="px-12 py-12">
            <h2 className="text-[3rem]">{movie.show.name}</h2>
            <Summary  summary={movie.show.summary} />
            <div className="py-5">
            <Link to="/" className="bg-yellow-400 btn">Go Back</Link>
            <Link to={`/buyticket/${movie.show.id}`} className="bg-yellow-400 btn">Book Ticket</Link>
            </div>
            </div>
           
        </div>
    );
};

export default ShowDetails;
