"use client";
import React from "react";
import { useState } from "react";

const Payment = () => {
  const payment = ["Cash", "Card",   "wallet", "bank"];
  const [activePayment, setActivePayment] = useState();
  return (
    <div className="p-2 flex flex-col border-2 border-gray-700">
      <div>Select Your Payment Method</div>
      <div className=" grid grid-cols-4 gap-2">
        {payment.map((items, index) => (
          <div
            onClick={() => setActivePayment(index)}
            key={index}
            className={ `hover:bg-gray-500 cursor-pointer  p-2 border border-black ${
              activePayment == index ? "border-2 border-gray-800" : null
            } `}
          >
            {items}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
