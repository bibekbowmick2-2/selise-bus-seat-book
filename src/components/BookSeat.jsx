import React, { useContext, useState } from "react";
import { ContextProvider } from "./AuthProviders/AuthProvider";
import { useParams } from "react-router-dom";

const BookSeat = () => {


  const destinations = ["New York", "Los Angeles", "Chicago", "Houston", "Miami"];
  const times = ["08:00 AM", "10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"];

  const {handleSubmit} = useContext(ContextProvider);
  const { seat_no,busNumber } = useParams();
console.log(seat_no);
  

  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-400">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Bus Booking Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Bus No</label>
            <input
              type="text"
              name="busNo"
              defaultValue={busNumber}
             
             
              
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter bus number"
              
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Seat No</label>
            <input
              type="text"
              name="seatNo"
              defaultValue={seat_no}
             
             
              
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter seat number"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Destination</label>
            <select
              name="destination"
              
             
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select destination</option>
              {destinations.map((dest, index) => (
                <option key={index} >{dest}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Time</label>
            <select
              name="time"
              
              
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select time</option>
              {times.map((time, index) => (
                <option key={index} >{time}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookSeat;

