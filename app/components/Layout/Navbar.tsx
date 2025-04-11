import React from "react";
import { UserButton } from "@clerk/nextjs";
const Navbar = () => {
  return (
    <div className="flex justify-between h-[80px] bg-blue-950 text-white p-2 items-center">
      <div>RecVan</div>
      <div>
        <ul className="flex gap-4 justify-between"  >
          <li>Home</li>
          <li>Operator Area</li>
          <li>Customer Area</li>
          <li>Help</li>
          <li>Popular Destinations</li>
        </ul>
      </div>
      <UserButton />
    </div>
  );
};

export default Navbar;
