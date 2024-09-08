import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WeatherProvider } from './state/weatherContext';
import CitiesPage from './pages/CitiesPage';
import WeatherPage from './pages/WeatherPage';

const App: React.FC = () => {
  return (
    <WeatherProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CitiesPage />} />
          <Route path="/weather/:cityName" element={<WeatherPage />} />
        </Routes>
      </Router>
    </WeatherProvider>
  );
};

export default App;
