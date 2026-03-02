"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobService = void 0;
const job_model_1 = require("./job.model");
const cloudinary_1 = __importDefault(require("../../config/cloudinary"));
const createJob = async (payload, file) => {
    let imageUrl = "";
    if (file) {
        const uploaded = await new Promise((resolve, reject) => {
            cloudinary_1.default.uploader
                .upload_stream({ folder: "quickhire/jobs" }, (error, result) => {
                if (error)
                    reject(error);
                else
                    resolve(result);
            })
                .end(file.buffer);
        });
        imageUrl = uploaded.secure_url;
    }
    const job = await job_model_1.Job.create({
        ...payload,
        image: imageUrl,
    });
    return job;
};
const updateJob = async (id, payload) => {
    const job = await job_model_1.Job.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    if (!job) {
        throw new Error("Job not found");
    }
    return job;
};
const getAllJobs = async (query) => {
    const { title, workPlace, page = 1, limit = 10 } = query;
    const filter = {};
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
    const jobs = await job_model_1.Job.find(filter)
        .populate("category", "name")
        .skip(skip)
        .limit(Number(limit))
        .sort({ createdAt: -1 });
    const total = await job_model_1.Job.countDocuments(filter);
    return {
        meta: {
            page: Number(page),
            limit: Number(limit),
            total,
        },
        data: jobs,
    };
};
const getSingleJob = async (id) => {
    return await job_model_1.Job.findById(id).populate("category", "name");
};
const deleteJob = async (id) => {
    return await job_model_1.Job.findByIdAndDelete(id);
};
exports.JobService = {
    createJob,
    getAllJobs,
    getSingleJob,
    deleteJob,
    updateJob
};
