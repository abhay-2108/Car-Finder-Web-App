import React from 'react';
import '../styles/Wishlist.css';
import { useWishlist } from '../context/WishlistContext'; // Make sure the path is correct

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="wishlist-container">
      <h2 className="wishlist-title">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="wishlist-empty">No cars in wishlist.</p>
      ) : (
        <div className="wishlist-grid">
          {wishlist.map((car) => (
            <div key={car.id} className="wishlist-card">
              {car.imageUrl && (
                <img
                  src={car.imageUrl}
                  alt={`${car.brand} ${car.model}`}
                  className="wishlist-image"
                />
              )}
              <div className="wishlist-info">
                <h3 className="wishlist-name">{car.brand} {car.model}</h3>
                <p className="wishlist-price">₹{car.price.toLocaleString()}</p>
                <button
                  className="remove-button"
                  onClick={() => removeFromWishlist(car.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
