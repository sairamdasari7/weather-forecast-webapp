import React, { useState, useEffect } from 'react';
import CityRow from './CityRow';
import SearchBar from './SearchBar';
import '../styles/App.css';

interface City {
  name: string;
  country: string;
  timezone: string;
}

const CitiesTable: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const response = await fetch(
        'https://public.opendatasoft.com/api/records/1.0/search/?dataset=geonames-all-cities-with-a-population-1000&rows=50'
      );
      const data = await response.json();
      setCities(data.records.map((record: any) => record.fields));
    } catch (error) {
      console.error('Failed to fetch cities', error);
    }
  };

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="table-container">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <table className="cities-table">
        <thead>
          <tr>
            <th>City Name</th>
            <th>Country</th>
            <th>Timezone</th>
          </tr>
        </thead>
        <tbody>
          {filteredCities.map((city) => (
            <CityRow key={city.name} city={city} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CitiesTable;
