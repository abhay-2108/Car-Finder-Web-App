import React from 'react';
import '../styles/SearchBar.css'; // Assuming you have a CSS file for styling

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search cars by name..."
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
