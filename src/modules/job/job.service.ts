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
  const { title, workPlace, page = 1, limit = 10 } = query;

  const filter: any = {};

  // 🔥 Title OR Location
  if (title || workPlace) {
    filter.$or = [];

    if (title) {
      filter.$or.push({ title: { $regex: title, $options: "i" } });
    }

    if (workPlace) {
      filter.$or.push({ workPlace: { $regex: workPlace, $options: "i" } });
    }
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
  return await Job.findById(id).populate("category", "name");
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