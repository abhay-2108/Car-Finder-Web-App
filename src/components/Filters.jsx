import React from 'react';
import '../styles//Filters.css';

const Filters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="filters-container">
      <input
        type="text"
        name="brand"
        placeholder="Search Brand"
        value={filters.brand}
        onChange={handleChange}
        className="filter-input"
      />
      <select name="fuelType" value={filters.fuelType} onChange={handleChange} className="filter-select">
        <option value="">Select Fuel Types</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
      </select>
      <select name="seatingCapacity" value={filters.seatingCapacity} onChange={handleChange} className="filter-select">
        <option value="">Select Seats</option>
        <option value="4">4 Seater</option>
        <option value="5">5 Seater</option>
        <option value="7">7 Seater</option>
      </select>
      <select name="sortBy" value={filters.sortBy} onChange={handleChange} className="filter-select">
        <option value="">Sort by Price</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>
    </div>
  );
};

export default Filters;
