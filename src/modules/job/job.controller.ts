import { Request, Response } from "express";
import { JobService } from "./job.service";

const createJob = async (req: Request, res: Response) => {
  try {
    const result = await JobService.createJob(
      req.body,
      req.file as Express.Multer.File
    );

    res.status(201).json({
      success: true,
      message: "Job created successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateJob = async (req: Request, res: Response) => {
  try {
    const result = await JobService.updateJob(
      req.params.id as string,
      req.body
    );

    res.status(200).json({
      success: true,
      message: "Job updated successfully",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
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
  deleteJob,
  updateJob
};