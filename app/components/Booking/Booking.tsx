"use client"
import React from "react";
import AutoComplete2 from "./AutoComplete2";
import Car from "./Car";
import Payment from "./Payment";
import MapBox1 from "./MapBox1";
const Booking = () => {
  return (
    <div className="flex p-2 gap-2  h-screen">
      <div className="flex flex-col gap-4 basis-1/3">
        <div className="text-2xl font-bold">Booking</div>
        <AutoComplete2 />
        <Car />
        <Payment />
        <div className=" hover:bg-gray-600 cursor-pointer w-full p-2 bg-gray-800 text-white text-center">
          Book Now
        </div>
      </div>
      <div className="basis-2/3">
      <MapBox1 />
      </div>
    </div>
  );
};

export default Booking;
