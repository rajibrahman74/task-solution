import React, { useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";

const Booking = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedSeats, setSelectedSeats] = useState("");
  const [seatType, setSeatType] = useState("");
  const [price, setPrice] = useState(0);

  const { id } = useParams();
  const movies = useLoaderData();

  const movie = movies.find((movie) => movie.show.id === Number(id));

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
    setPhoneNumber("");
    setSelectedSeats("");
    setSeatType("");
    setPrice(0);
  };

  const handleSeatChange = (e) => {
    setSeatType(e.target.value);
    // Calculate price based on seat type
    switch (e.target.value) {
        case "gold":
        setPrice(1500);
        break;
      case "silver":
        setPrice(1200);
        break;
      case "bronze":
        setPrice(900);
        break;
      default:
        setPrice(0);
        break;
    }
  };

  return (
    <div className="py-[12rem] max-w-md mx-auto px-2">
      <h2 className="text-5xl font-bold mb-8">Booking Form</h2>
      {movie && (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="movieName" className="block mb-2 font-medium">
              Movie Name:
            </label>
            <input
              type="text"
              id={movie.show.id}
              value={movie.show.name}
              readOnly
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              Name:
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block mb-2 font-medium">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
         
          <div className="mb-4">
            <label htmlFor="seatType" className="block mb-2 font-medium">
              Seat Type:
            </label>
            <select
              id="seatType"
              value={seatType}
              onChange={handleSeatChange}
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            >
              <option value="">Select Seat Type</option>
              <option value="silver">Silver</option>
              <option value="gold">Gold</option>
              <option value="bronze">Bronze</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-2 font-medium">
              Price:
            </label>
            <input
              type="text"
              id="price"
              value={price}
              readOnly
              className="border border-gray-300 rounded-md p-2 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-yellow-400 btn  font-bold py-2 px-4 rounded"
          >
            Book Now
          </button>
        </form>
      )}
    </div>
  );
};

export default Booking;
