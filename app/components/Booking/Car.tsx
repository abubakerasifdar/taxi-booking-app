"use client"
import carlist from "./../../data/carlist";
import React from "react";
import {useState} from "react";

const Car = () => {
  const [selectedCar , setSelectedCar] = useState()
  return (
    <div className=" p-2 flex flex-col gap-2 border-2 border-gray-700" >
      <div>Select Your Car</div>
      <div className="grid gap-2 grid-cols-3">
        {carlist.map((items, index) => {
          return (
            <div
              key={index}
              className={`hover:bg-gray-600 cursor-pointer  p-2 flex gap-2 border border-gray-700 flex-col text-center ${index==selectedCar ? 'border-2 border-gray-800': null} `}
              onClick={()=>{setSelectedCar(index)}} >
              <div>Car Image</div>
              <div className="flex  justify-between">
                <div>{items.name}</div>
                <div>{items.charges*8}$</div>
              </div>
            </div>
          );
        })}
       
     
   

      </div>
    </div>
  );
};

export default Car;
