import React from "react";

const Car = () => {
  return (
    <div className=" p-2 flex flex-col gap-2 border-2 border-gray-700">
      <div>Select Your Car</div>
      <div className="grid grid-cols-3">
        <div className="flex gap-2 border border-gray-700 flex-col justify-center items-center">
          <div>Car Image</div>
          <div className="flex justify-between">
            <div> Name</div>
            <div> Price</div>
          </div>
        </div>
        <div className="flex gap-2 border border-gray-700 flex-col justify-center items-center">
          <div>Car Image</div>
          <div className="flex justify-between">
            <div> Name</div>
            <div> Price</div>
          </div>
        </div>
        <div className="flex gap-2 border border-gray-700 flex-col justify-center items-center">
          <div>Car Image</div>
          <div className="flex justify-between">
            <div> Name</div>
            <div> Price</div>
          </div>
        </div>
        <div className="flex gap-2 border border-gray-700 flex-col justify-center items-center">
          <div>Car Image</div>
          <div className="flex justify-between">
            <div> Name</div>
            <div> Price</div>
          </div>
        </div>
        <div className="flex gap-2 border border-gray-700 flex-col justify-center items-center">
          <div>Car Image</div>
          <div className="flex justify-between">
            <div> Name</div>
            <div> Price</div>
          </div>
        </div>
        <div className="flex gap-2 border border-gray-700 flex-col justify-center items-center">
          <div>Car Image</div>
          <div className="flex bg-blue-700 justify-between">
            <div>Name</div>
            <div>Price</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
