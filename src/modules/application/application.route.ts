import { Router } from "express";
import { ApplicationController } from "./application.controller";
import { authenticate } from "../middlewares/auth.middleware";
 
 

const router = Router();

router.post(
  "/:id",
  authenticate,
  ApplicationController.applyForJob
);

router.get(
  "/my",
  authenticate,
  ApplicationController.getMyApplications
);

router.get(
  "/",
   
  authenticate,
  ApplicationController.getAllApplications
);

export default router;