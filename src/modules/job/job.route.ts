import { Router } from "express";
import { JobController } from "./job.controller";
import { authenticate } from "../middlewares/auth.middleware";

const JobRouter = Router();

JobRouter.get("/", authenticate, JobController.getAllJobs);
JobRouter.get("/:id", authenticate, JobController.getSingleJob);
JobRouter.post("/", authenticate, JobController.createJob);
JobRouter.delete("/:id", authenticate, JobController.deleteJob);

export default JobRouter;