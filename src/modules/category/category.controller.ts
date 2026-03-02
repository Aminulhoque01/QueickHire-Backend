import { Request, Response } from "express";
import * as categoryService from "./category.service";
import { Job } from "../job/job.model";

export const createCategory = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;

    const category = await categoryService.createCategory(name);

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await categoryService.getAllCategories();

    res.json({
      success: true,
      data: categories,
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getCategoryStats = async (req: Request, res: Response) => {
  try {
    const data = await categoryService.getCategoryJobCount();
    res.status(200).json({
      success: true,
      data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}; 

export const deleteCategory = async (req: Request, res: Response) => {
  try {
    await categoryService.deleteCategory(req.params.id as string);

    res.json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};