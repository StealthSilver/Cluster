import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './routes/post';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3004;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/cluster-post';

app.use(cors());
app.use(express.json());

app.use('/api/posts', postRoutes);

mongoose.connect(MONGODB_URI).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Post service running on port ${PORT}`);
});
