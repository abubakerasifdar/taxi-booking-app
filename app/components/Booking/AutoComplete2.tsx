"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const AutoComplete2 = () => {
  // handle states
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const [sourceSuggestion, setSourceSuggestion] = useState([]);
  const [destinationSuggestion, setDestinationSuggestion] = useState([]);

  const [activeSearchBox, setActiveSearchBox] = useState("source");

  // handle useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeSearchBox === "source" && source) {
        getsearchedAddress(source, setSourceSuggestion);
      } else if (activeSearchBox === "destination" && destination) {
        getsearchedAddress(destination, setDestinationSuggestion);
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [source, destination, activeSearchBox]);
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
                  setSource(items?.name);
                  setSourceSuggestion([]);
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
                  setDestination(items?.name);
                  setDestinationSuggestion([]);
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