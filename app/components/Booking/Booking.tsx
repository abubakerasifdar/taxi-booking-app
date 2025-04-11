import React from "react";
import AutoComplete2 from "./AutoComplete2";
import Car from "./Car";
import Payment from "./Payment";
import Map from "./Map";
const Booking = () => {
  return (
    <div className="flex p-2 gap-2  h-screen">
      <div className="flex flex-col gap-4 basis-1/3">
       <AutoComplete2 />
        <Car />
        <Payment />
      </div>
      <div   className="basis-2/3" >
        <Map />
      </div>
    </div>
  );
};

export default Booking;
