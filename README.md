# Weather Forecast Web Application

    This is a responsive web application that allows users to search for cities and view their current weather conditions. The application is built with React and TypeScript and utilizes the OpenWeatherMap API to fetch real-time weather data. It features city searching, dynamic routing, and weather details display.

## Website Live URL: https://weatherforecastingwebapplication.netlify.app/

## Features

   - City List: Displays a list of cities with their country and timezone.
   - Search Functionality: Allows users to search for cities in real-time.
   - Weather Details: Clicking on a city shows the current weather information such as temperature, weather condition, humidity, and wind speed.
   - Responsive Design: The application is fully responsive and works on all device sizes.

## Technologies Used

  - React: For building the user interface.
  - TypeScript: To add static typing and ensure type safety.
  - OpenWeatherMap API: For fetching weather data.
  - CSS: For styling the application and making it responsive.
  - React Router: For client-side routing and navigation.

## Getting Started
  
### Prerequisites
   - Node.js and npm should be installed on your machine. You can download them from here.

### Installation
  
  1. Clone the repository:

    ```bash
    git clone https://github.com/sairamdasari7/weather-forecast-webapp.git

  2. Navigate into the project directory:

    ```bash
    cd weather-forecast-app
  
  3. Install dependencies:

    ```bash
    npm install
    
  4. Get an OpenWeatherMap API key:

    - Sign up for a free API key from the OpenWeatherMap website.
    - Replace YOUR_API_KEY in src/components/WeatherDetails.tsx with your actual API key:
    - typescript
    
     ```bash
     const apiKey = 'YOUR_API_KEY';
     
  5. Running the Application

    - To run the application locally:

    ```bash
    npm start
    
  6. The application will be available at http://localhost:3000.

### Building for Production

  - To build the app for production:

    ```bash
    npm run build

  - The production-ready files will be created in the build/ directory.

### Usage

  - On the Cities Page, you will see a list of cities with their respective country and timezone.
  - You can search for cities using the search bar at the top of the table.
  - Clicking on a city row will navigate you to the Weather Page, where you can view the weather details for that specific city.
  - The weather information includes temperature, weather condition, humidity, and wind speed.

### Environment Variables

  - You need to set your OpenWeatherMap API Key in WeatherDetails.tsx.
   
### API Used
  
  - OpenWeatherMap API: Provides the current weather data for cities around the world. Learn more about the API here.

### Folder Structure

  - public/: Contains the HTML template and static assets.
  - src/:
  - components/: Reusable UI components like city tables, search bar, and weather details.
  - pages/: Main pages of the application, such as the Cities and Weather pages.
  - state/: Context for managing weather data across the application.
  - styles/: Global and component-specific styles for the application.

### License

  - This project is licensed under the MIT License - see the LICENSE file for details.

### Happy Coding!

  = This README.md covers the full project details, including instructions for running the app, the technologies used, and the API key setup.
