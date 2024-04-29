# RideShare

RideShare is a real-time ETA calculation project designed to provide accurate estimated time of arrival (ETA) calculations for a predefined route with multiple stops. 
It utilizes React for the front-end development and integrates with the Google Maps API for map rendering and marker placement.
# Features

1. Interactive map displaying the entire route with marked stops.
2. Real-time tracking of the driver's current location.
3. Calculation of ETA for each stop based on a constant average speed.
4. Dynamic updating of information as the driver progresses along the route.

# Prerequisites

Before running the project, ensure you have the following:
1. Node.js installed on your system.
2. Google Maps API key for map rendering. You can obtain it from the Google Cloud Platform console.

# Getting Started
 
1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install project dependencies by running the command:
   
### `npm install`

4. Replace YOUR_API_KEY in the App.js file with your Google Maps API key.
5. Start the development server by running the command:

### `npm start`

Open your web browser and navigate to http://localhost:3000 to view the application.

# Usage

Upon loading the application, you'll see an interactive map displaying the entire route with marked stops.
The ETA for each stop is calculated in real-time based on a predefined average speed.
As the driver progresses along the route, updates displays dynamically to show information about the Next upcomming stop.
The interface provides details such as the next stop, distance to the next stop, and ETA.

# Credits

This project utilizes React for front-end development.
The map rendering and marker placement are achieved using the Google Maps API.
ETA calculations are performed using the Haversine formula for distance calculation.

