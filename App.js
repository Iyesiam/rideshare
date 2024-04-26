import React from 'react';
import './App.css';
import Header from './components/Header';
import ETACalculations from './components/ETACalculations';
import Map from './components/Map';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ETACalculations />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
