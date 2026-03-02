import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db";
import AuthRouter from "./modules/auth/auth.route";
import CategoryRouter from "./modules/category/category.routes";
import JobRouter from "./modules/job/job.route";
import ApplicationRouter from "./modules/application/application.route";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://queick-hire-frontend.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

// Routes
app.use("/auth", AuthRouter);
app.use("/category", CategoryRouter);
app.use("/job", JobRouter);
app.use("/apply", ApplicationRouter);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Server is running successfully",
  });
});

// Connect DB & Start Server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Database connection failed:", err);
  });