import React from 'react';
import './App.css';
import Header from './components/Header';
import ETACalculations from './components/ETACalculations';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps'; // Import the necessary components
import Footer from './components/Footer';

function App() {
  const position = { lat: 61.2176, lng: -149.8997 }; // Initial position for the map

  return (
    <div className="App">
      <Header />
      <div className="component-container">
        <ETACalculations />
        <APIProvider apiKey={'AIzaSyB7cMC75pawM9vjBL-OhNx9zrWodnNvffk'}> {/* Add the APIProvider component */}
          <Map center={position} zoom={10}> {/* Render the Map component */}
            <Marker position={position} /> {/* Add a Marker component */}
          </Map>
        </APIProvider>
      </div>
      <Footer />
    </div>
  );
}

export default App;
