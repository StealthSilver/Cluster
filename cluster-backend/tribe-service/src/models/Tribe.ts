import mongoose from 'mongoose';

const tribeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: {
    type: String,
    enum: ['sports', 'technology', 'art', 'wellness', 'learning', 'other'],
    default: 'other'
  },
  isPublic: { type: Boolean, default: true },
  members: [{ type: String }],
  createdBy: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Tribe', tribeSchema);
