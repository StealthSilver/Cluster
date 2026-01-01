import mongoose from 'mongoose';

const userProfileSchema = new mongoose.Schema({
  userId: { type: String, required: true, unique: true },
  avatar: { type: String, default: '👤' },
  bio: { type: String, maxlength: 160, default: '' },
  joinedTribes: [{ type: String }],
  activitySummary: { postsCount: { type: Number, default: 0 }, joinedTribesCount: { type: Number, default: 0 } },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('UserProfile', userProfileSchema);