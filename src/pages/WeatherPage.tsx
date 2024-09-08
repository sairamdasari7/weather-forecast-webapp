import React from 'react';
import { useParams } from 'react-router-dom';
import WeatherDetails from '../components/WeatherDetails';
import '../styles/App.css';

const WeatherPage: React.FC = () => {
  const { cityName } = useParams<{ cityName: string }>();

  return (
    <div className="weather-page-container">
      <WeatherDetails cityName={cityName || ''} />
    </div>
  );
};

export default WeatherPage;
