import mongoose from 'mongoose';

const circleSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  connections: [{ personId: String, closenessScore: { type: Number, min: 0, max: 100, default: 50 } }],
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Circle', circleSchema);