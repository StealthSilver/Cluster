import express from "express";
import User from "../models/User.js";
import { authMiddleware, generateTokens } from "../middleware/auth.js";

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { email, password, name } = req.body;
    if (!email || !password || !name)
      return res.status(400).json({ error: "Missing fields" });
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ error: "User exists" });
    const user = new User({ email, password, name });
    await user.save();
    const { accessToken, refreshToken } = generateTokens(user._id.toString());
    res
      .status(201)
      .json({
        user: { id: user._id, email: user.email, name: user.name },
        accessToken,
        refreshToken,
      });
  } catch (error) {
    res.status(500).json({ error: "Signup failed" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Email and password required" });
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password)))
      return res.status(401).json({ error: "Invalid credentials" });
    const { accessToken, refreshToken } = generateTokens(user._id.toString());
    res.json({
      user: { id: user._id, email: user.email, name: user.name },
      accessToken,
      refreshToken,
    });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
});

router.post("/refresh", (req, res) => {
  try {
    const { refreshToken } = req.body;
    if (!refreshToken)
      return res.status(400).json({ error: "Refresh token required" });
    const decoded = require("jsonwebtoken").verify(
      refreshToken,
      process.env.JWT_SECRET || "secret"
    );
    const { accessToken: newAccessToken, refreshToken: newRefreshToken } =
      generateTokens((decoded as any).userId);
    res.json({ accessToken: newAccessToken, refreshToken: newRefreshToken });
  } catch (error) {
    res.status(401).json({ error: "Invalid refresh token" });
  }
});

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Failed to get user" });
  }
});

export default router;
