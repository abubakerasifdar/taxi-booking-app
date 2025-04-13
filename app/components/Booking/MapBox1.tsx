"use client";
import React from "react";
import Map from "react-map-gl/mapbox";
import {  Marker } from "react-map-gl/mapbox";
// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';
import { useContext , useEffect , useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { UserLocationContext } from "./../../../context/UserLocationContext";
import { UserButton } from "@clerk/nextjs";
import Markers from "./Markers";
import { SourceDestinationCoordinateContext } from "./../../../context/SourceDestinationCoordinateContext";
import { DestinationCoordinateContext } from "./../../../context/DestinationCoordinateContext";
import { DestinationDataContext } from "./../../../context/DestinationDataContext";
const MapBox1 = () => {
  const { userLocation, setUserLocation } = useContext(UserLocationContext);
  console.log(userLocation, "users locations");
  const { sourceCoordinates, setSourceCoordinates } = useContext(
    SourceDestinationCoordinateContext
  );
  const { destinationCoordinates, setDestinationCoordinates } = useContext(
    DestinationCoordinateContext
  );
  const {directionData, setDirectionData} = useContext(DirectionDataContext);
  console.log(sourceCoordinates);
  console.log(destinationCoordinates);
  const mapRef = useRef();
  useEffect(() => {
    if (sourceCoordinates) {
      mapRef.current?.flyTo({
        center: [sourceCoordinates.lng, sourceCoordinates.lat],
        duration: 2500,
      });
    }
    if(destinationCoordinates) {
      mapRef.current?.flyTo({
        center: [destinationCoordinates.lng, destinationCoordinates.lat],
        duration: 2500,
      });

    }
    if(sourceCoordinates && destinationCoordinates){
      getDirection()
    }
  }, [sourceCoordinates, destinationCoordinates]);
  const  getDirection = async ()=>{
    try {
     
      const res = await fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${sourceCoordinates.lng},${sourceCoordinates.lat};${destinationCoordinates.lng},${destinationCoordinates.lat}?access_token=pk.eyJ1IjoiYWJ1YmFrYXJhc2lmZGFyMTAwIiwiYSI6ImNtOWI1bGI4ZDA4cmEybHF3OXZyaXVxMGYifQ.46-nCFy38os_LdphJ6FPlg&geometries=geojson&overview=full`,{headers:{"Content-Type":"application/json"}})
      const result  = await res.json();
      console.log(result);
      setDirectionData(result);

      
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <>
      <div className="text-2xl font-bold mb-4">Map</div>
      {userLocation ? <Map
         ref={mapRef}
        mapboxAccessToken="pk.eyJ1IjoiYWJ1YmFrYXJhc2lmZGFyMTAwIiwiYSI6ImNtOWI1bGI4ZDA4cmEybHF3OXZyaXVxMGYifQ.46-nCFy38os_LdphJ6FPlg"
        initialViewState={{
          longitude: userLocation?.lng,
          latitude: userLocation?.lat,
          zoom: 14,
        }}
        style={{ width: "100%", height: 495 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Markers />
      </Map>: null}
      
    </>
  );
};
export default MapBox1;
