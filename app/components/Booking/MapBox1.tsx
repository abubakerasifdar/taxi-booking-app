"use client";
import React from "react";
import Map from "react-map-gl/mapbox";
// If using with mapbox-gl v1:
// import Map from 'react-map-gl/mapbox-legacy';
import "mapbox-gl/dist/mapbox-gl.css";

const MapBox1 = () => {
  return (
    <>
      
       <div className="text-2xl font-bold mb-4">Map</div>
        <Map
          mapboxAccessToken="pk.eyJ1IjoiYWJ1YmFrYXJhc2lmZGFyMTAwIiwiYSI6ImNtOWI1bGI4ZDA4cmEybHF3OXZyaXVxMGYifQ.46-nCFy38os_LdphJ6FPlg"
          initialViewState={{
            longitude: -122.4,
            latitude: 37.8,
            zoom: 14,
          }}
          style={{ width: "100%", height: 495 }}
          mapStyle="mapbox://styles/mapbox/streets-v9"
        />
 
    </>
  );
};
export default MapBox1;
