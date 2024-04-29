import React from 'react';
import './App.css';
import Header from './components/Header';
import ETACalculations from './components/ETACalculations';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'; // Importing the necessary components
import Footer from './components/Footer';

function App() {
  const startPosition = { lat: -1.939826787816454, lng: 30.0445426438232 }; // Setting the starting position for the map
  const stops = [
    { name: 'Stop A', position: { lat: -1.9355377074007851, lng: 30.060163829002217 } },
    { name: 'Stop B', position: { lat: -1.9358808342336546, lng: 30.08024820994666 } },
    { name: 'Stop C', position: { lat: -1.9489196023037583, lng: 30.092607828989397 } },
    { name: 'Stop D', position: { lat: -1.9592132952818164, lng: 30.106684061788073 } },
    { name: 'Stop E', position: { lat: -1.9487480402200394, lng: 30.126596781356923 } }
  ];
  const finalDestination = { lat: -1.9365670876910166, lng: 30.13020167024439 }; // Setting the final destination for the map

  return (
    <div className="App">
      <Header />
      <div className="component-container">
        <ETACalculations />
        <div style={{ width: '100%', height: '400px' }}> {/* Defining a div for the map */}
          <APIProvider apiKey={'YOUR_API_KEY'}> {/* Adding the APIProvider component */}
            <Map center={startPosition} zoom={12}> {/* Rendering the Map component */}
              <Marker position={startPosition} label="Start" /> {/* Adding a Marker component for the starting point */}
              {stops.map((stop, index) => (
                <Marker key={index} position={stop.position} label={stop.name} /> // Adding a Marker component for each stop
              ))}
              <Marker position={finalDestination} label="Final" /> {/* Adding a Marker component for the final destination */}
            </Map>
          </APIProvider>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
