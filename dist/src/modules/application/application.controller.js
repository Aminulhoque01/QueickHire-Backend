"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationController = void 0;
const application_service_1 = require("./application.service");
const job_model_1 = require("../job/job.model");
const application_model_1 = require("./application.model");
const applyForJob = async (req, res) => {
    const user = req.user;
    const jobId = req.params.id; // string already
    if (!jobId) {
        return res.status(400).json({ success: false, message: "Job ID is required" });
    }
    const jobExists = await job_model_1.Job.findById(jobId);
    if (!jobExists) {
        return res.status(404).json({ success: false, message: "Job not found" });
    }
    const payload = {
        ...req.body,
        jobId, // ✅ use the string directly
        userId: user.id
    };
    const result = await application_model_1.Application.create(payload);
    res.status(201).json({
        success: true,
        message: "Application submitted successfully",
        data: result
    });
};
const getMyApplications = async (req, res) => {
    const user = req.user;
    const result = await application_service_1.ApplicationService.getMyApplications(user.id);
    res.status(200).json({
        success: true,
        data: result
    });
};
const getAllApplications = async (req, res) => {
    const result = await application_service_1.ApplicationService.getAllApplications();
    res.status(200).json({
        success: true,
        data: result
    });
};
exports.ApplicationController = {
    applyForJob,
    getMyApplications,
    getAllApplications
};
