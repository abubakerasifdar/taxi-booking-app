import React from "react";
import Map from "react-map-gl/mapbox";
import {  Marker } from "react-map-gl/mapbox";
import { useContext } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { UserLocationContext } from "@/context/UserLocationContext";
import { SourceDestinationCoordinateContext } from "@/context/SourceDestinationCoordinateContext";
import { DestinationCoordinateContext } from "@/context/DestinationCoordinateContext";

const Markers = () => {
  const { userLocation } = useContext(UserLocationContext);
  const { sourceCoordinates } = useContext(SourceDestinationCoordinateContext);
  const { destinationCoordinates } = useContext(DestinationCoordinateContext);

  // Return only Marker components (no wrapping div)
  return (
    <>
      {/* User Location Marker */}
      {userLocation?.lng && userLocation?.lat && (
        <Marker
          longitude={userLocation.lng}
          latitude={userLocation.lat}
          anchor="bottom"
        >
          <img src="/placeholder.png" style={{ height: 40, width: 40 }} />
        </Marker>
      )}

      {/* Source Marker */}
      {sourceCoordinates?.lng && sourceCoordinates?.lat && (
        <Marker
          longitude={sourceCoordinates.lng}
          latitude={sourceCoordinates.lat}
          anchor="bottom"
        >
          <img src="/placeholder.png" style={{ height: 40, width: 40 }} />
        </Marker>
      )}

      {/* Destination Marker */}
      {destinationCoordinates?.lng && destinationCoordinates?.lat && (
        <Marker
          longitude={destinationCoordinates.lng}
          latitude={destinationCoordinates.lat}
          anchor="bottom"
        >
          <img src="/placeholder.png" style={{ height: 40, width: 40 }} />
        </Marker>
      )}
    </>
  );
};

export default Markers;