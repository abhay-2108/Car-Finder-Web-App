import Car from '../models/Car.js';

export const getCars = async (req, res) => {
  try {
    const { brand, model, fuelType, seatingCapacity, minPrice, maxPrice } = req.query;
    let query = {};

    if (brand) query.brand = { $regex: brand, $options: 'i' };
    if (model) query.model = { $regex: model, $options: 'i' };
    if (fuelType) query.fuelType = fuelType;
    if (seatingCapacity) query.seatingCapacity = Number(seatingCapacity);
    if (minPrice || maxPrice) query.price = {
      ...(minPrice && { $gte: Number(minPrice) }),
      ...(maxPrice && { $lte: Number(maxPrice) })
    };

    const cars = await Car.find(query);
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};