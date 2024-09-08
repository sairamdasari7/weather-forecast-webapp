import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

interface CityProps {
  city: {
    name: string;
    country: string;
    timezone: string;
  };
}

const CityRow: React.FC<CityProps> = ({ city }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/weather/${city.name}`);
  };

  return (
    <tr className="city-row" onClick={handleClick}>
      <td>{city.name}</td>
      <td>{city.country}</td>
      <td>{city.timezone}</td>
    </tr>
  );
};

export default CityRow;
