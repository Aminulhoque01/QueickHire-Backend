"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobController = void 0;
const job_service_1 = require("./job.service");
const createJob = async (req, res) => {
    try {
        const result = await job_service_1.JobService.createJob(req.body, req.file);
        res.status(201).json({
            success: true,
            message: "Job created successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const updateJob = async (req, res) => {
    try {
        const result = await job_service_1.JobService.updateJob(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "Job updated successfully",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
const getAllJobs = async (req, res) => {
    const result = await job_service_1.JobService.getAllJobs(req.query);
    res.status(200).json({
        success: true,
        data: result
    });
};
const getSingleJob = async (req, res) => {
    const result = await job_service_1.JobService.getSingleJob(req.params.id);
    res.status(200).json({
        success: true,
        data: result
    });
};
const deleteJob = async (req, res) => {
    await job_service_1.JobService.deleteJob(req.params.id);
    res.status(200).json({
        success: true,
        message: "Job deleted successfully"
    });
};
exports.JobController = {
    createJob,
    getAllJobs,
    getSingleJob,
    deleteJob,
    updateJob,
};
