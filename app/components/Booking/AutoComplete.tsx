"use client";

import React, { useState, useEffect } from "react";

const AutoComplete = () => {
  // handle states 
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [sourceSuggestions, setSourceSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState("source"); // 'source' or 'destination'
 
  // handle useeffect 
  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeField === "source" && source) {
        fetchSuggestions(source, setSourceSuggestions);
      } else if (activeField === "destination" && destination) {
        fetchSuggestions(destination, setDestinationSuggestions);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [source, destination, activeField]);


  // handle api 
  const fetchSuggestions = async (query, setSuggestions) => {
    try {
      const res = await fetch(`/api/search-address?q=${query}`, {
        headers: { "Content-Type": "application/json" },
      });
      const result = await res.json();
      setSuggestions(result?.suggestions || []);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };


  // Handle event 
  const handleSuggestionClick = (item, field) => {
    if (field === "source") {
      setSource(item.name);
      setSourceSuggestions([]);
    } else {
      setDestination(item.name);
      setDestinationSuggestions([]);
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full max-w-md mx-auto p-4">
      <div className="relative">
        <input
          type="text"
          value={source}
          onChange={(e) => {
            setSource(e.target.value);
            setActiveField("source");
          }}
          onFocus={() => setActiveField("source")}
          placeholder="From"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {sourceSuggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
            {sourceSuggestions.map((item, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(item, "source")}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="relative">
        <input
          type="text"
          value={destination}
          onChange={(e) => {
            setDestination(e.target.value);
            setActiveField("destination");
          }}
          onFocus={() => setActiveField("destination")}
          placeholder="Where To"
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {destinationSuggestions.length > 0 && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
            {destinationSuggestions.map((item, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(item, "destination")}
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AutoComplete;