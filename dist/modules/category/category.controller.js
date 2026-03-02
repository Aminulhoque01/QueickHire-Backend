"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategory = exports.getCategoryStats = exports.getCategories = exports.createCategory = void 0;
const categoryService = __importStar(require("./category.service"));
const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = await categoryService.createCategory(name);
        res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: category,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        });
    }
};
exports.createCategory = createCategory;
const getCategories = async (req, res) => {
    try {
        const categories = await categoryService.getAllCategories();
        res.json({
            success: true,
            data: categories,
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getCategories = getCategories;
const getCategoryStats = async (req, res) => {
    try {
        const data = await categoryService.getCategoryJobCount();
        res.status(200).json({
            success: true,
            data,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
exports.getCategoryStats = getCategoryStats;
const deleteCategory = async (req, res) => {
    try {
        await categoryService.deleteCategory(req.params.id);
        res.json({
            success: true,
            message: "Category deleted successfully",
        });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.deleteCategory = deleteCategory;
