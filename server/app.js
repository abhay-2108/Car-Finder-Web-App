import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import carRoutes from './routes/carRoutes.js';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api', carRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));