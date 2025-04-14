import React, { useEffect, useState } from 'react';
import CarCard from '../components/CarCard';
import Filters from '../components/Filters';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';
import DarkModeToggle from '../components/DarkModeToggle';
import { useWishlist } from '../context/WishlistContext';
import '../styles/Home.css';

// 🔁 Fetch cars from backend with error handling
const fetchCars = async () => {
  try {
    const response = await fetch('http://localhost:5000/api/cars');
    if (!response.ok) throw new Error('Failed to fetch cars');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    return []; // Return empty array if fetch fails
  }
};

const Home = () => {
  const { addToWishlist } = useWishlist();

  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({ brand: '', fuelType: '', seatingCapacity: '', sortBy: '' });
  const [currentPage, setCurrentPage] = useState(1);
  const [darkMode, setDarkMode] = useState(false);

  const carsPerPage = 10;

  // 🧠 Fetch data on mount
  useEffect(() => {
    const loadCars = async () => {
      const data = await fetchCars();
      setCars(data);
    };
    loadCars();
  }, []);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  // 🔍 Filtering & sorting logic
  const filteredCars = cars
    .filter((car) =>
      car.model.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filters.brand === '' || car.brand.toLowerCase().includes(filters.brand.toLowerCase())) &&
      (filters.fuelType === '' || car.fuelType === filters.fuelType) &&
      (filters.seatingCapacity === '' || car.seatingCapacity.toString() === filters.seatingCapacity)
    )
    .sort((a, b) => {
      if (filters.sortBy === 'low') return a.price - b.price;
      if (filters.sortBy === 'high') return b.price - a.price;
      return 0;
    });

  // 📦 Pagination logic
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  return (
    <div className={`home-container ${darkMode ? 'dark-mode' : ''}`}>
      <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Filters filters={filters} setFilters={setFilters} />

      <div className="car-grid">
        {currentCars.map((car) => (
          <CarCard
            key={car.id || `${car.brand}-${car.model}-${car.price}`} // ✅ Unique fallback key
            car={car}
            onAddToWishlist={() => addToWishlist(car)}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredCars.length / carsPerPage)}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Home;
