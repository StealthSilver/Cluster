import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
// Load environment variables
dotenv.config();
// Import routes
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/profile.js";
import postRoutes from "./routes/post.js";
import tribeRoutes from "./routes/tribe.js";
import circleRoutes from "./routes/circle.js";
import clusterRoutes from "./routes/cluster.js";
import notificationRoutes from "./routes/notification.js";
const app = express();
const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGO_URI;
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Health check endpoint
app.get("/health", (req, res) => {
    res.json({ status: "OK", message: "Backend is running" });
});
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/tribes", tribeRoutes);
app.use("/api/circles", circleRoutes);
app.use("/api/cluster", clusterRoutes);
app.use("/api/notifications", notificationRoutes);
// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Internal server error" });
});
// Database connection and server startup
if (MONGO_URI) {
    mongoose
        .connect(MONGO_URI)
        .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => {
            console.log(`Backend server running on port ${PORT}`);
        });
    })
        .catch((err) => {
        console.error("MongoDB connection error:", err);
        process.exit(1);
    });
}
else {
    console.error("MONGO_URI is not set in environment variables");
    process.exit(1);
}
export default app;
//# sourceMappingURL=server.js.map