"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationService = void 0;
const application_model_1 = require("./application.model");
const applyForJob = async (payload) => {
    return await application_model_1.Application.create(payload);
};
const getMyApplications = async (userId) => {
    return await application_model_1.Application.find({ userId })
        .populate("jobId") // show job details
        .sort({ createdAt: -1 });
};
const getAllApplications = async () => {
    return await application_model_1.Application.find();
};
exports.ApplicationService = {
    applyForJob,
    getMyApplications,
    getAllApplications
};
