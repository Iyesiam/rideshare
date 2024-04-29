import React, { useState, useEffect } from 'react';
import './ETACalculations.css';

const ETACalculations = () => {
  const [currentStopIndex, setCurrentStopIndex] = useState(0);
  const [eta, setEta] = useState(null);
  const [distance, setDistance] = useState(null);

  // Coordinates of the starting point and the stops
  const stops = [
    { label: 'Nyabugogo', position: { lat: -1.939826787816454, lng: 30.0445426438232 } },
    { label: 'Kimironko', position: { lat: -1.9365670876910166, lng: 30.13020167024439 } },
    { label: 'Kacyiru Bus Park', position: { lat: -1.940469, lng: 30.101167 } } // Placeholder coordinates for demonstration
  ];

  useEffect(() => {
    // Constant average speed in kilometers per hour
    const speed = 50; // Adjust this value according to your needs

    // Calculate and set ETA for the current stop
    const currentStop = stops[currentStopIndex];
    const nextStop = stops[currentStopIndex + 1];
    if (nextStop) {
      const distanceToNextStop = calculateDistance(currentStop.position.lat, currentStop.position.lng, nextStop.position.lat, nextStop.position.lng);
      const calculatedEtaHours = distanceToNextStop / speed;
      const calculatedEtaMinutes = calculatedEtaHours * 60; // Convert hours to minutes
      setEta(Math.round(calculatedEtaMinutes)); // Round to the nearest whole number
      setDistance(distanceToNextStop.toFixed(2)); // Set distance to the next stop
    }
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

  // Function to handle clicking on the "Next Stop" button
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (currentStopIndex < stops.length - 1) {
        setCurrentStopIndex(currentStopIndex + 1);
      }
    }, eta * 60 * 1000); // Convert ETA from minutes to milliseconds

    return () => clearTimeout(timeout);
  }, [currentStopIndex, eta, stops]);

  return (
    <div className="ETACalculations">
      <div className="eta-container">
        <h2 className="eta-title">{stops[currentStopIndex].label} - {stops[currentStopIndex + 1] && stops[currentStopIndex + 1].label}</h2>
        <p className="eta-info">Next Stop: {stops[currentStopIndex + 1] && stops[currentStopIndex + 1].label}</p>
        <p className="eta-info">Distance: {distance} km</p>
        <p className="eta-info">Time: {eta} minutes</p>
      </div>
    </div>
  );
};

export default ETACalculations;
