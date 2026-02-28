import { Request, Response } from "express";
import { JobService } from "./job.service";

const createJob = async (req: Request, res: Response) => {
  const result = await JobService.createJob(req.body);
  res.status(201).json({
    success: true,
    data: result
  });
};

const getAllJobs = async (req: Request, res: Response) => {
  const result = await JobService.getAllJobs(req.query);
  res.status(200).json({
    success: true,
    data: result
  });
};

const getSingleJob = async (req: Request, res: Response) => {
  const result = await JobService.getSingleJob(req.params.id as string);
  res.status(200).json({
    success: true,
    data: result
  });
};

const deleteJob = async (req: Request, res: Response) => {
  await JobService.deleteJob(req.params.id as string);
  res.status(200).json({
    success: true,
    message: "Job deleted successfully"
  });
};

export const JobController = {
  createJob,
  getAllJobs,
  getSingleJob,
  deleteJob
};