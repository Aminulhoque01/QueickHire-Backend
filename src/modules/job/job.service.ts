import { Job, IJob } from "./job.model";

const createJob = async (payload: IJob) => {
  return await Job.create(payload);
};

const getAllJobs = async (query: any) => {
  const { search, location, category } = query;

  const filter: any = {};

  if (search) {
    filter.title = { $regex: search, $options: "i" };
  }

  if (location) {
    filter.location = location;
  }

  if (category) {
    filter.category = category;
  }

  return await Job.find(filter).sort({ createdAt: -1 });
};

const getSingleJob = async (id: string) => {
  return await Job.findById(id);
};

const deleteJob = async (id: string) => {
  return await Job.findByIdAndDelete(id);
};

export const JobService = {
  createJob,
  getAllJobs,
  getSingleJob,
  deleteJob
};