import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import AuthRouter from "../src/modules/auth/auth.route";
import CategoryRouter from "../src/modules/category/category.routes";
import JobRouter from "../src/modules/job/job.route";
import ApplicationRouter from "../src/modules/application/application.route";

dotenv.config();

const app = express();

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

app.use("/auth", AuthRouter)
app.use("/category", CategoryRouter)
app.use("/job", JobRouter)
app.use("/apply", ApplicationRouter)

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Server is running successfully",
  });
});



export default app;