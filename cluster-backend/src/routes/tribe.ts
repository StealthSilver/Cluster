import express from "express";
import Tribe from "../models/Tribe.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.post("/", authMiddleware, async (req, res) => {
  try {
    const { name, description, category } = req.body;
    const tribe = new Tribe({
      name,
      description,
      category,
      createdBy: req.userId,
      members: [req.userId],
    });
    await tribe.save();
    res.status(201).json(tribe);
  } catch (error) {
    res.status(500).json({ error: "Failed to create tribe" });
  }
});

router.get("/", async (req, res) => {
  try {
    const tribes = await Tribe.find({ isPublic: true });
    res.json(tribes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tribes" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const tribe = await Tribe.findById(req.params.id);
    if (!tribe) return res.status(404).json({ error: "Tribe not found" });
    res.json(tribe);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch tribe" });
  }
});

router.post("/:id/join", authMiddleware, async (req, res) => {
  try {
    const tribe = await Tribe.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { members: req.userId } },
      { new: true }
    );
    res.json(tribe);
  } catch (error) {
    res.status(500).json({ error: "Failed to join tribe" });
  }
});

router.post("/:id/leave", authMiddleware, async (req, res) => {
  try {
    const tribe = await Tribe.findByIdAndUpdate(
      req.params.id,
      { $pull: { members: req.userId } },
      { new: true }
    );
    res.json(tribe);
  } catch (error) {
    res.status(500).json({ error: "Failed to leave tribe" });
  }
});

router.get("/search/:query", async (req, res) => {
  try {
    const tribes = await Tribe.find({
      isPublic: true,
      $or: [
        { name: { $regex: req.params.query, $options: "i" } },
        { description: { $regex: req.params.query, $options: "i" } },
      ],
    });
    res.json(tribes);
  } catch (error) {
    res.status(500).json({ error: "Search failed" });
  }
});

export default router;
