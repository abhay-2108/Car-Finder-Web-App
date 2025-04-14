import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/cars', (req, res) => {
  const carsPath = path.join(__dirname, '../data/cars.json');
  const carsData = JSON.parse(fs.readFileSync(carsPath, 'utf-8'));
  res.json(carsData);
});

export default router;
