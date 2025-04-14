import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/cars'; 

// Fetch all or filtered cars from backend
export const fetchCars = async (params = {}) => {
  try {
    const query = new URLSearchParams(params).toString();
    const response = await axios.get(`${BASE_URL}?${query}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cars:', error);
    return [];
  }
};
