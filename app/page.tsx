"use client";
import Navbar from "./components/Layout/Navbar";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Layout/Footer";
import { useState, useEffect, useContext } from "react";
import "./globals.css";
import { UserLocationContext } from "./../context/UserLocationContext";
import { SourceDestinationCoordinateContext } from "./../context/SourceDestinationCoordinateContext";
import { DestinationCoordinateContext } from './../context/DestinationCoordinateContext';
import { DirectionDataContext } from './../context/DirectionDataContext';
export default function Home() {
  const [userLocation, setUserLocation] = useState();
  const [sourceCoordinates, setSourceCoordinates] = useState([]);
  const [destinationCoordinates, setDestinationCoordinates] = useState([]);
  const [directionData, setDirectionData] = useState([]);
  useEffect(() => {
    getUserLocation();
  }, []);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setUserLocation({ lat: pos.coords.latitude, lng: pos.coords.longitude });
      console.log(pos);
      console.log(pos.coords.latitude);
      console.log(pos.coords.longitude);
    });
  };
  return (
    <UserLocationContext.Provider value={{ userLocation, setUserLocation }}>
      <SourceDestinationCoordinateContext.Provider
        value={{ sourceCoordinates, setSourceCoordinates }}
      >
        <DestinationCoordinateContext.Provider
          value={{ destinationCoordinates, setDestinationCoordinates }}
        >
        <DirectionDataContext value={{directionData, setDirectionData}}>
          <div>
            <Navbar />
            <Booking />
            <Footer />
          </div>
          </ DirectionDataContext>
        </DestinationCoordinateContext.Provider>
      </SourceDestinationCoordinateContext.Provider>
    </UserLocationContext.Provider>
  );
}
