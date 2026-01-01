import express from "express";
import UserProfile from "../models/UserProfile.js";
import { authMiddleware } from "../middleware/auth.js";

const router = express.Router();

router.get("/me", authMiddleware, async (req, res) => {
  try {
    let profile = await UserProfile.findOne({ userId: req.userId });
    if (!profile) {
      profile = new UserProfile({ userId: req.userId });
      await profile.save();
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: "Failed to get profile" });
  }
});

router.get("/:userId", async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ userId: req.params.userId });
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: "Failed to get profile" });
  }
});

router.put("/me/bio", authMiddleware, async (req, res) => {
  try {
    const profile = await UserProfile.findOneAndUpdate(
      { userId: req.userId },
      { bio: req.body.bio },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: "Failed to update bio" });
  }
});

router.put("/me/avatar", authMiddleware, async (req, res) => {
  try {
    const profile = await UserProfile.findOneAndUpdate(
      { userId: req.userId },
      { avatar: req.body.avatar },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: "Failed to update avatar" });
  }
});

router.post("/me/join-tribe/:tribeId", authMiddleware, async (req, res) => {
  try {
    const profile = await UserProfile.findOneAndUpdate(
      { userId: req.userId },
      {
        $addToSet: { joinedTribes: req.params.tribeId },
        $inc: { "activitySummary.joinedTribesCount": 1 },
      },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: "Failed to join tribe" });
  }
});

router.post("/me/leave-tribe/:tribeId", authMiddleware, async (req, res) => {
  try {
    const profile = await UserProfile.findOneAndUpdate(
      { userId: req.userId },
      {
        $pull: { joinedTribes: req.params.tribeId },
        $inc: { "activitySummary.joinedTribesCount": -1 },
      },
      { new: true }
    );
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: "Failed to leave tribe" });
  }
});

export default router;
