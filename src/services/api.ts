import axios from 'axios';

const CITY_API_URL = 'https://public.opendatasoft.com/api/records/1.0/search/';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchCities = async (page: number) => {
  const response = await axios.get(`${CITY_API_URL}?dataset=geonames-all-cities-with-a-population-1000&rows=20&start=${page}`);
  return response.data.records;
};

export const fetchWeather = async (cityName: string) => {
  const apiKey = 'YOUR_API_KEY';
  const response = await axios.get(`${WEATHER_API_URL}?q=${cityName}&appid=${apiKey}&units=metric`);
  return response.data;
};
