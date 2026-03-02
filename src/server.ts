import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./config/db";

dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Server is running successfully",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});