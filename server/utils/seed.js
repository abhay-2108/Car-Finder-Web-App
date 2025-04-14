// utils/seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Car = require('../models/Car');
const carData = require('../data/cars.json');

dotenv.config();

const seedCars = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    await Car.deleteMany();
    await Car.insertMany(carData);

    console.log('Database seeded!');
    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedCars();