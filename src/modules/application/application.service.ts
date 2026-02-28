import { User } from "../auth/auth.model";
import { Application } from "./application.model";

const applyForJob = async (payload: any) => {
  return await Application.create(payload);
};

const getMyApplications = async (userId: string) => {
  return await Application.find({ userId })
    .populate("jobId") // show job details
    .sort({ createdAt: -1 });
};

const getAllApplications = async () => {
  return await Application.find()
    .populate("jobId")
    .populate("userId", "name email role")
    .sort({ createdAt: -1 });
};

export const ApplicationService = {
  applyForJob,
  getMyApplications,
  getAllApplications
};