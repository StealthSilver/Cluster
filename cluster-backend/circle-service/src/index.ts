import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import circleRoutes from './routes/circle';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3005;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cluster-circle';

app.use(cors());
app.use(express.json());

app.use('/api/circles', circleRoutes);

mongoose.connect(MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Circle service running on port ${PORT}`);
});
