import { Category } from "./category.model";

export const createCategory = async (name: string) => {
  const existing = await Category.findOne({ name });
  if (existing) {
    throw new Error("Category already exists");
  }

  const category = await Category.create({ name });
  return category;
};

 

export const getCategoryJobCount = async () => {
  const result = await Category.aggregate([
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

export const getAllCategories = async () => {
  return await Category.find().sort({ createdAt: -1 });
};

export const deleteCategory = async (id: string) => {
  return await Category.findByIdAndDelete(id);
};