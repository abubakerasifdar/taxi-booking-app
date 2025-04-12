"use client"
import Navbar from "./components/Layout/Navbar";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Layout/Footer";
import { useState, useEffect } from "react";
import "./globals.css";


export default function Home() {
  const [userLocation, setUserLocation] = useState();
  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function(pos){
      console.log(pos);
      clg
    })
  };
  return (
    <div>
      <Navbar />
      <Booking />
      <Footer />
    </div>
  );
}
