import { Request, Response } from "express";
import { ApplicationService } from "./application.service";

const applyForJob = async (req: Request, res: Response) => {
  const user = (req as any).user;

  const payload = {
    ...req.body,
    userId: user.id
  };

  const result = await ApplicationService.applyForJob(payload);

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