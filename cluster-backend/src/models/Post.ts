import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  content: { type: String, required: true, maxlength: 2000 },
  image: { type: String },
  author: { type: String, required: true },
  tribeId: { type: String, required: true, index: true },
  createdAt: { type: Date, default: Date.now, index: true }
});

export default mongoose.model('Post', postSchema);