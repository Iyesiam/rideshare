import React, { useState, useEffect } from 'react';
import './ETACalculations.css';

function ETACalculations() {
    // State to track the estimated time of arrival
    const [eta, setEta] = useState(23); // Initial ETA of 23 minutes

    // Function to calculate ETA
    const calculateETA = () => {
        // Logic to calculate the ETA based on distance and average speed
        // For demonstration purposes, I'm setting a fixed ETA of 23 minutes
        setEta(23);
    };

    // Call calculateETA function on component mount
    useEffect(() => {
        calculateETA();
    }, []);

    return (
        <div className="eta-container">
            <h2 className="eta-title">Nyabugogo - Kimironko</h2>
            <p className="eta-info">Next Stop: Kacyiru Bus Park</p>
            <p className="eta-info">Distance: 23 km</p>
            <p className="eta-info">Time: {eta} minutes</p>
        </div>
    );
}

export default ETACalculations;
