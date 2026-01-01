import express from 'express';
import Post from '../models/Post';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

// Create post
router.post('/', authMiddleware, async (req, res) => {
  try {
    const { content, image, tribeId } = req.body;
    const post = new Post({
      content,
      image,
      tribeId,
      author: req.userId
    });
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// Get posts by tribe
router.get('/tribe/:tribeId', async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const posts = await Post.find({ tribeId: req.params.tribeId })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// Get posts by author
router.get('/user/:userId', async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.userId }).sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

// Delete post
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post?.author !== req.userId) {
      return res.status(403).json({ error: 'Not authorized' });
    }
    await Post.findByIdAndDelete(req.params.id);
    res.json({ message: 'Post deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
});

// Health check
router.get('/health', (req, res) => {
  res.json({ status: 'Post service is running' });
});

export default router;
