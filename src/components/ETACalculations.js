import React, { useState, useEffect } from 'react';
import './ETACalculations.css';

const ETACalculations = () => {
  const [currentStopIndex, setCurrentStopIndex] = useState(0); // Changed initial value to 0
  const [eta, setEta] = useState(null);
  const [distance, setDistance] = useState(null);

  // Coordinates of the starting point and the stops
  const stops = [
    { label: 'Stop A', position: { lat: -1.9355377074007851, lng: 30.060163829002217 } },
    { label: 'Stop B', position: { lat: -1.9358808342336546, lng: 30.08024820994666 } },
    { label: 'Stop C', position: { lat: -1.9489196023037583, lng: 30.092607828989397 } },
    { label: 'Stop D', position: { lat: -1.9592132952818164, lng: 30.106684061788073 } },
    { label: 'Stop E', position: { lat: -1.9487480402200394, lng: 30.126596781356923 } }
  ];

  useEffect(() => {
    // Constant average speed in kilometers per hour
    const speed = 50; // Adjust this value according to your needs

    // Calculate and set ETA for the current stop
    const currentStop = stops[currentStopIndex];
    const distanceToCurrentStop = calculateDistance(stops[0].position.lat, stops[0].position.lng, currentStop.position.lat, currentStop.position.lng);
    const calculatedEtaHours = distanceToCurrentStop / speed;
    const calculatedEtaMinutes = calculatedEtaHours * 60; // Convert hours to minutes
    setEta(Math.round(calculatedEtaMinutes)); // Round to the nearest whole number
    setDistance(distanceToCurrentStop.toFixed(2)); // Set distance to the current stop

    // Set timeout to automatically proceed to the next stop after the ETA has elapsed
    const timeout = setTimeout(() => {
      if (currentStopIndex < stops.length - 1) {
        setCurrentStopIndex(currentStopIndex + 1);
      }
    }, calculatedEtaMinutes * 60 * 1000); // Convert ETA from minutes to milliseconds

    // Clean up timeout on component unmount or when current stop changes
    return () => clearTimeout(timeout);
  }, [currentStopIndex, stops]); // Run whenever the currentStopIndex or stops change

  // Function to calculate distance between two points using Haversine formula
  function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
  }

  // Function to convert degrees to radians
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  return (
    <div className="ETACalculations">
      <div className="eta-container">
        <h2 className="eta-title">Nyabugogo - Kimironko</h2>
        <p className="eta-info">Next Stop: {stops[currentStopIndex - 1] ? stops[currentStopIndex - 1].label : 'Final Destination'}</p>
        <p className="eta-info">Distance: {distance} km</p>
        <p className="eta-info">Time: {eta} minutes</p>
      </div>
    </div>
  );
};

export default ETACalculations;
