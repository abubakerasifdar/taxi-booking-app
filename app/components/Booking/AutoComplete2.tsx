"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { SourceDestinationCoordinateContext } from "./../../../context/SourceDestinationCoordinateContext";
import { DestinationCoordinateContext } from './../../../context/DestinationCoordinateContext';
const AutoComplete2 = () => {
  // handle states
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const [sourceSuggestion, setSourceSuggestion] = useState([]);
  const [destinationSuggestion, setDestinationSuggestion] = useState([]);

  const [activeSearchBox, setActiveSearchBox] = useState("source");

  const { sourceCoordinates, setSourceCoordinates } = useContext(
    SourceDestinationCoordinateContext
  );
  const { destinationCoordinates, setDestinationCoordinates } = useContext(
    DestinationCoordinateContext
  );

  // handle useEffect
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (activeSearchBox === "source" && source) {
  //       getsearchedAddress(source, setSourceSuggestion);
  //     } else if (activeSearchBox === "destination" && destination) {
  //       getsearchedAddress(destination, setDestinationSuggestion);
  //     }
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, [source, destination, activeSearchBox]);
  // handle apis
  const getsearchedAddress = async (query, setSuggestions) => {
    try {
      const res = await fetch(`/api/search-address?q=${query}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();
      setSuggestions(result);
    } catch (error) {
      console.log(error);
    }
  };
  const onSourceAddressClick = async (items) => {
    setSource(items?.name);
    setSourceSuggestion([]);
    const res = await fetch(
      `https://api.mapbox.com/search/searchbox/v1/retrieve/${items.mapbox_id}?session_token=test_session_123&access_token=pk.eyJ1IjoiYWJ1YmFrYXJhc2lmZGFyMTAwIiwiYSI6ImNtOWI1bGI4ZDA4cmEybHF3OXZyaXVxMGYifQ.46-nCFy38os_LdphJ6FPlg`
    );
    const result = await res.json();
    setSourceCoordinates({
      lng: result?.features[0]?.geometry?.coordinates[0],
      lat: result?.features[0]?.geometry?.coordinates[1],
    });
  };
  const onDestinationAddressClick = async (items) => {
    setDestination(items?.name);
    setDestinationSuggestion([]);
    const res = await fetch(
      `https://api.mapbox.com/search/searchbox/v1/retrieve/${items.mapbox_id}?session_token=test_session_123&access_token=pk.eyJ1IjoiYWJ1YmFrYXJhc2lmZGFyMTAwIiwiYSI6ImNtOWI1bGI4ZDA4cmEybHF3OXZyaXVxMGYifQ.46-nCFy38os_LdphJ6FPlg`
    );
    const result = await res.json();

    setDestinationCoordinates({
      lng: result?.features[0]?.geometry?.coordinates[0],
      lat: result?.features[0]?.geometry?.coordinates[1],
    });
  };

  return (
    <div className="flex flex-col gap-2 border-2 border-gray-700 p-2 relative">
      <div className="relative">
        <input
          type="text"
          placeholder="From"
          className="w-full p-2 border border-gray-700"
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
            setActiveSearchBox("source");
          }}
          onFocus={() => setActiveSearchBox("source")}
        />
        {sourceSuggestion?.suggestions && (
          <div className="absolute z-10 w-full mt-1 bg-white border-2 border-gray-700 rounded">
            {sourceSuggestion.suggestions.map((items, index) => (
              <h1
                onClick={() => {
                  onSourceAddressClick(items);
                }}
                className="p-2 w-auto cursor-pointer hover:bg-gray-400"
                key={index}
              >
                {items?.name}
              </h1>
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <input
          type="text"
          placeholder="Where To"
          className="w-full p-2 border border-gray-700"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            setActiveSearchBox("destination");
          }}
          onFocus={() => setActiveSearchBox("destination")}
        />
        {destinationSuggestion?.suggestions && (
          <div className="absolute z-10 w-full mt-1 bg-white border-2 border-gray-700 rounded">
            {destinationSuggestion.suggestions.map((items, index) => (
              <h1
                onClick={() => {
                  onDestinationAddressClick(items);
                }}
                className="p-2 w-auto cursor-pointer hover:bg-gray-400"
                key={index}
              >
                {items?.name}
              </h1>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoComplete2;
