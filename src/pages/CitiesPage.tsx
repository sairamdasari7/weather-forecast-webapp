import React from 'react';
import CitiesTable from '../components/CitiesTable';
import '../styles/App.css';

const CitiesPage: React.FC = () => {
  return (
    <div className="cities-page-container">
      <h1>City List</h1>
      <CitiesTable />
    </div>
  );
};

export default CitiesPage;
