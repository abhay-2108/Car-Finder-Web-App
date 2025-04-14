import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCars } from '../services/carService';
import '../styles/CarDetails.css';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);

  useEffect(() => {
    const loadCar = async () => {
      const data = await fetchCars();
      const foundCar = data.find((c) => c.id.toString() === id);
      setCar(foundCar);
    };
    loadCar();
  }, [id]);

  if (!car) return <div className="car-details-loading">Loading...</div>;

  return (
    <div className="car-details-container">
      <img src={car.imageUrl} alt={car.model} className="car-details-image" />
      <h2 className="car-details-title">{car.brand} {car.model}</h2>
      <p className="car-details-info">Fuel Type: {car.fuelType}</p>
      <p className="car-details-info">Seating Capacity: {car.seatingCapacity}</p>
      <p className="car-details-price">Price: ₹{car.price.toLocaleString()}</p>
    </div>
  );
};

export default CarDetails;
