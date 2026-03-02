"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.getAllCategories = exports.getCategoryJobCount = exports.createCategory = void 0;
const category_model_1 = require("./category.model");
const createCategory = async (name) => {
    const existing = await category_model_1.Category.findOne({ name });
    if (existing) {
        throw new Error("Category already exists");
    }
    const category = await category_model_1.Category.create({ name });
    return category;
};
exports.createCategory = createCategory;
const getCategoryJobCount = async () => {
    const result = await category_model_1.Category.aggregate([
        {
            $lookup: {
                from: "jobs", // MUST be collection name
                localField: "_id",
                foreignField: "category",
                as: "jobs",
            },
        },
        {
            $project: {
                name: 1,
                jobCount: { $size: "$jobs" },
            },
        },
    ]);
    return result;
};
exports.getCategoryJobCount = getCategoryJobCount;
const getAllCategories = async () => {
    return await category_model_1.Category.find().sort({ createdAt: -1 });
};
exports.getAllCategories = getAllCategories;
const deleteCategory = async (id) => {
    return await category_model_1.Category.findByIdAndDelete(id);
};
exports.deleteCategory = deleteCategory;
