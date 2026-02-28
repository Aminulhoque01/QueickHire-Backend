import { Router } from "express";
import { JobController } from "./job.controller";

const JobRouter = Router();

JobRouter.get("/", JobController.getAllJobs);
JobRouter.get("/:id", JobController.getSingleJob);
JobRouter.post("/", JobController.createJob);
JobRouter.delete("/:id", JobController.deleteJob);

export default JobRouter;