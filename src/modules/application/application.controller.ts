import { Request, Response } from "express";
import { ApplicationService } from "./application.service";
import { Job } from "../job/job.model";
import { Application } from "./application.model";

const applyForJob = async (req: Request, res: Response) => {
  const user = (req as any).user;
  const jobId = req.params.id; // string already

  if (!jobId) {
    return res.status(400).json({ success: false, message: "Job ID is required" });
  }

  const jobExists = await Job.findById(jobId);
  if (!jobExists) {
    return res.status(404).json({ success: false, message: "Job not found" });
  }

  const payload = {
    ...req.body,
    jobId,       // ✅ use the string directly
    userId: user.id
  };

  const result = await Application.create(payload);

  res.status(201).json({
    success: true,
    message: "Application submitted successfully",
    data: result
  });
};

const getMyApplications = async (req: Request, res: Response) => {
  const user = (req as any).user;

  const result = await ApplicationService.getMyApplications(user.id);

  res.status(200).json({
    success: true,
    data: result
  });
};

const getAllApplications = async (req: Request, res: Response) => {
  const result = await ApplicationService.getAllApplications();
  
  res.status(200).json({
    success: true,
    data: result
  });
};

export const ApplicationController = {
  applyForJob,
  getMyApplications,
  getAllApplications
};