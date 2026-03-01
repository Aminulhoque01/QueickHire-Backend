import { Router } from "express";
import { JobController } from "./job.controller";
import { authenticate } from "../middlewares/auth.middleware";
import { upload } from "../middlewares/upload.middleware";

const JobRouter = Router();

JobRouter.get("/",  JobController.getAllJobs);
JobRouter.get("/:id",   JobController.getSingleJob);
JobRouter.post(
  "/",
  authenticate,
  upload.single("image"),
  JobController.createJob
);

JobRouter.patch(
  "/:id",
  authenticate,
  JobController.updateJob
);

JobRouter.delete("/:id", authenticate, JobController.deleteJob);

export default JobRouter;