import React, { createContext, useContext, useEffect, useState } from 'react';

// Create the context
const WishlistContext = createContext();

// Provider component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Failed to parse wishlist from localStorage:', error);
      return [];
    }
  });

  // Persist wishlist to localStorage on changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Add car to wishlist
  const addToWishlist = (car) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === car.id);
      return exists ? prev : [...prev, car];
    });
  };

  // Remove car from wishlist
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((car) => car.id !== id));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the wishlist context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
