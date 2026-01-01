import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { authMiddleware } from './middleware/auth';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3006;

app.use(cors());
app.use(express.json());

// Mock tribes data
const mockTribes = [
  { id: '1', name: 'Football', description: 'Sports & football discussion', category: 'sports', members: 150 },
  { id: '2', name: 'Startups', description: 'Startup founders & entrepreneurs', category: 'technology', members: 200 },
  { id: '3', name: 'Digital Sketching', description: 'Digital art & illustration', category: 'art', members: 80 },
  { id: '4', name: 'Wellness', description: 'Health, fitness & mindfulness', category: 'wellness', members: 120 },
  { id: '5', name: 'Languages', description: 'Learn new languages', category: 'learning', members: 90 }
];

// Get cluster config
app.get('/api/cluster/config', (req, res) => {
  res.json({
    version: 'v1',
    tribes: mockTribes
  });
});

// Get global view
app.get('/api/cluster/global-view', authMiddleware, async (req, res) => {
  try {
    res.json({
      clusters: mockTribes,
      total: mockTribes.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch global view' });
  }
});

app.listen(PORT, () => {
  console.log(`Cluster service running on port ${PORT}`);
});
