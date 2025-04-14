import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { WishlistProvider } from './context/WishlistContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <WishlistProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </WishlistProvider>
);
