import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  brand: String,
  model: String,
  price: Number,
  fuelType: String,
  seatingCapacity: Number,
  imageUrl: String,
});

const Car = mongoose.model('Car', carSchema);
export default Car;