import express from "express";
import Tribe from "../models/Tribe.js";
import Post from "../models/Post.js";
import Circle from "../models/Circle.js";
const router = express.Router();
router.get("/config", async (req, res) => {
    try {
        const tribeCount = await Tribe.countDocuments();
        const postCount = await Post.countDocuments();
        const circleCount = await Circle.countDocuments();
        res.json({
            appName: "Cluster",
            version: "1.0.0",
            stats: { tribes: tribeCount, posts: postCount, circles: circleCount },
        });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch config" });
    }
});
router.get("/global-view", async (req, res) => {
    try {
        const recentTribes = await Tribe.find().sort({ createdAt: -1 }).limit(10);
        const recentPosts = await Post.find().sort({ createdAt: -1 }).limit(20);
        const totalTribeMembers = await Tribe.aggregate([
            { $group: { _id: null, totalMembers: { $sum: { $size: "$members" } } } },
        ]);
        res.json({
            recentTribes,
            recentPosts,
            totalTribeMembers: totalTribeMembers[0]?.totalMembers || 0,
        });
    }
    catch (error) {
        res.status(500).json({ error: "Failed to fetch global view" });
    }
});
export default router;
//# sourceMappingURL=cluster.js.map