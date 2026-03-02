import express from "express";
import cors from "cors";
import JobRouter from "./modules/job/job.route";
import ApplicationRouter from "./modules/application/application.route";
import AuthRouter from "./modules/auth/auth.route";
import CategoryRouter from "./modules/category/category.routes";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "queick-hire-frontend.vercel.app",
    ],
    credentials: true,
  })
);

app.use(express.json());

 

app.use("/category", CategoryRouter);
app.use("/job", JobRouter);
app.use("/apply", ApplicationRouter);
app.use("/auth", AuthRouter);

export default app;