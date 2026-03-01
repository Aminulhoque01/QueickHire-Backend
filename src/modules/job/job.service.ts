import { Job } from "./job.model";
import cloudinary from "../../config/cloudinary";

const createJob = async (payload: any, file: Express.Multer.File) => {
  let imageUrl = "";

  if (file) {
    const uploaded = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { folder: "quickhire/jobs" },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        )
        .end(file.buffer);
    });

    imageUrl = uploaded.secure_url;
  }

  const job = await Job.create({
    ...payload,
    image: imageUrl,
  });

  return job;
};

const updateJob = async (id: string, payload: any) => {
  const job = await Job.findByIdAndUpdate(
    id,
    payload,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!job) {
    throw new Error("Job not found");
  }

  return job;
};

const getAllJobs = async (query: any) => {
  const { search, category, location, page = 1, limit = 5 } = query;

  const filter: any = {};

  if (search) {
    filter.$or = [
      { title: { $regex: search, $options: "i" } },
      { location: { $regex: search, $options: "i" } },
    ];
  }

  if (category) {
    filter.category = category;
  }

  if (location) {
    filter.location = { $regex: location, $options: "i" };
  }

  const skip = (Number(page) - 1) * Number(limit);

  const jobs = await Job.find(filter)
    .populate("category", "name")
    .skip(skip)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  const total = await Job.countDocuments(filter);

  return {
    meta: {
      page: Number(page),
      limit: Number(limit),
      total,
    },
    data: jobs,
  };
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
  deleteJob,
  updateJob
};