import React, { useEffect, useState } from 'react';

interface WeatherDetailsProps {
  cityName: string;
}

const WeatherDetails: React.FC<WeatherDetailsProps> = ({ cityName }) => {
  const [weatherData, setWeatherData] = useState<any>(null);

  useEffect(() => {
    if (cityName) {
      fetchWeather(cityName);
    }
  }, [cityName]);

  const fetchWeather = async (city: string) => {
    const apiKey = '920b013123447d8c58314d11177282d0';
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    setWeatherData(data);
  };

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="weather-details">
      <h2>{cityName}</h2>
      <p>Temperature: {weatherData.main.temp}°C</p>
      <p>Weather: {weatherData.weather[0].description}</p>
      <p>Humidity: {weatherData.main.humidity}%</p>
      <p>Wind Speed: {weatherData.wind.speed} m/s</p>
    </div>
  );
};

export default WeatherDetails;
