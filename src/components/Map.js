import React, { useEffect, useState } from 'react';
import { Marker } from '@vis.gl/react-google-maps';
import './Map.css';

function Map() {
    // Coordinates for starting point, intermediate stops, and ending point
    const coordinates = [
        { name: 'Starting Point', lat: -1.939826787816454, lng: 30.0445426438232 },
        { name: 'Stop A', lat: -1.9355377074007851, lng: 30.060163829002217 },
        { name: 'Stop B', lat: -1.9358808342336546, lng: 30.08024820994666 },
        { name: 'Stop C', lat: -1.9489196023037583, lng: 30.092607828989397 },
        { name: 'Stop D', lat: -1.9592132952818164, lng: 30.106684061788073 },
        { name: 'Stop E', lat: -1.9487480402200394, lng: 30.126596781356923 },
        { name: 'Ending Point', lat: -1.9365670876910166, lng: 30.13020167024439 }
    ];

    // State for current driver location
    const [driverLocation, setDriverLocation] = useState({ lat: null, lng: null });

    // Initialize Google Maps API
    useEffect(() => {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB7cMC75pawM9vjBL-OhNx9zrWodnNvffk&libraries=visualization`;
        script.async = true;
        document.body.appendChild(script);
        script.onload = () => {
            initMap();
        };
    }, []);

    // Function to initialize the map
    const initMap = () => {
        const map = new window.google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            center: { lat: -1.939826787816454, lng: 30.0445426438232 } // Center map on starting point
        });

        // Add markers for each stop
        coordinates.forEach(coord => {
            new window.google.maps.Marker({
                position: { lat: coord.lat, lng: coord.lng },
                map: map,
                title: coord.name
            });
        });

        // Function to update driver location (simulate real-time tracking)
        const updateDriverLocation = () => {
            const randomCoord = coordinates[Math.floor(Math.random() * coordinates.length)];
            setDriverLocation({ lat: randomCoord.lat, lng: randomCoord.lng });
        };

        // Update driver location every 5 seconds (for demonstration purposes)
        setInterval(updateDriverLocation, 5000);
    };

    // Calculate and display ETA for the next stop
    const calculateETA = () => {
        // Calculate distance between driver location and next stop
        // Calculate ETA based on average speed and distance
        // Display ETA on the map
    };

    return (
        <div className="map-container">
            <div id="map" className="map"></div>
            <Marker position={driverLocation} /> {/* Display driver's location */}
        </div>
    );
}

export default Map;
