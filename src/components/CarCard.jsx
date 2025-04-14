import React, { useState } from 'react';
import '../styles/CarCard.css';

// 🔍 Dynamically import all image files from the folder
const images = import.meta.glob('../assets/images/*.{jpg,jpeg,png}', { eager: true });

const CarCard = ({ car, onAddToWishlist }) => {
  const [clicked, setClicked] = useState(false);

  const handleWishlistClick = () => {
    onAddToWishlist(car);
    setClicked(true);
    setTimeout(() => setClicked(false), 2000);
  };

  // 🧠 Construct the key from image path
  const imageKey = `../assets/images/${car.imageUrl}`;
  const imageModule = images[imageKey];
  const imageSrc = imageModule?.default || images['../assets/images/default.jpeg']?.default;

  return (
    <div className="car-card">
      <img
        src={imageSrc}
        alt={`${car.brand} ${car.model}`}
        className="car-image"
      />
      <div className="car-title">
        {car.brand} {car.model}
      </div>
      <div className="car-details">
        {car.fuelType} • {car.seatingCapacity} Seater
      </div>
      <div className="car-price">₹ {car.price.toLocaleString()}</div>
      <button
        onClick={handleWishlistClick}
        className={`wishlist-button ${clicked ? 'clicked' : ''}`}
      >
        {clicked ? 'Added!' : 'Add to Wishlist'}
      </button>
    </div>
  );
};

export default CarCard;
