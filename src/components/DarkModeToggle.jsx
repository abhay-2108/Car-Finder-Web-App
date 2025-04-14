import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/DarkModeToggle.css';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  const navigate = useNavigate();

  const goToWishlist = () => {
    navigate('/wishlist');
  };

  return (
    <div className="dark-toggle-container">
      <button onClick={toggleDarkMode} className="dark-toggle-btn">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <button onClick={goToWishlist} className="wishlist-btn">
        Wishlist
      </button>
    </div>
  );
};

export default DarkModeToggle;
