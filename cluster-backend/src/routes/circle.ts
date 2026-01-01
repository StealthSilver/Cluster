import express from "express";
import Circle from "../models/Circle.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.get("/me", authMiddleware, async (req, res) => {
  try {
    let circle = await Circle.findOne({ userId: req.userId });
    if (!circle) {
      circle = new Circle({ userId: req.userId, connections: [] });
      await circle.save();
    }
    res.json(circle);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch circle" });
  }
});

router.post("/add", authMiddleware, async (req, res) => {
  try {
    const { personId } = req.body;
    const circle = await Circle.findOneAndUpdate(
      { userId: req.userId },
      { $addToSet: { connections: { personId, closenessScore: 50 } } },
      { new: true, upsert: true }
    );
    res.json(circle);
  } catch (error) {
    res.status(500).json({ error: "Failed to add connection" });
  }
});

router.put("/update/:personId", authMiddleware, async (req, res) => {
  try {
    const { closenessScore } = req.body;
    const circle = await Circle.findOneAndUpdate(
      { userId: req.userId, "connections.personId": req.params.personId },
      { $set: { "connections.$.closenessScore": closenessScore } },
      { new: true }
    );
    res.json(circle);
  } catch (error) {
    res.status(500).json({ error: "Failed to update closeness" });
  }
});

router.delete("/remove/:personId", authMiddleware, async (req, res) => {
  try {
    const circle = await Circle.findOneAndUpdate(
      { userId: req.userId },
      { $pull: { connections: { personId: req.params.personId } } },
      { new: true }
    );
    res.json(circle);
  } catch (error) {
    res.status(500).json({ error: "Failed to remove connection" });
  }
});

export default router;
