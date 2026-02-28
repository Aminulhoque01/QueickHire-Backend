import express from "express";
import cors from "cors";
import JobRouter from "./modules/job/job.route";
 

const app = express();

app.use(cors());
app.use(express.json());

app.use("/job", JobRouter);

export default app;