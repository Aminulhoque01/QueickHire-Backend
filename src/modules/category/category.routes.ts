import { Router } from "express";
import {
  createCategory,
  getCategories,
  deleteCategory,
} from "./category.controller";
import { authorize } from "../middlewares/authorize";
import { authenticate } from "../middlewares/auth.middleware";
 

const CategoryRouter = Router();

CategoryRouter.get("/", getCategories);
CategoryRouter.post("/", authenticate,  authorize("ADMIN"), createCategory);  
CategoryRouter.delete("/:id", authorize("ADMIN"),  deleteCategory);

export default CategoryRouter;