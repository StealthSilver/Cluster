import express from 'express';
import Notification from '../models/Notification';
import { authMiddleware } from '../middleware/auth';

const router = express.Router();

// Get notifications
router.get('/', authMiddleware, async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const notifications = await Notification.find({ userId: req.userId })
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);
    res.json(notifications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

// Create notification
router.post('/', async (req, res) => {
  try {
    const { userId, type, content, relatedId } = req.body;
    const notification = new Notification({ userId, type, content, relatedId });
    await notification.save();
    res.status(201).json(notification);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create notification' });
  }
});

// Mark as read
router.put('/:id/read', authMiddleware, async (req, res) => {
  try {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
    );
    res.json(notification);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update notification' });
  }
});

// Mark all as read
router.put('/read-all', authMiddleware, async (req, res) => {
  try {
    await Notification.updateMany(
      { userId: req.userId, read: false },
      { read: true }
    );
    res.json({ message: 'All notifications marked as read' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update notifications' });
  }
});

// Delete notification
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Notification.findByIdAndDelete(req.params.id);
    res.json({ message: 'Notification deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete notification' });
  }
});

export default router;
