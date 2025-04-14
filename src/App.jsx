import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import CarDetails from './pages/CarDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/car/:id" element={<CarDetails />} />
    </Routes>
  );
};

export default App;
