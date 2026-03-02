import { Router } from "express";
import { ApplicationController } from "./application.controller";
import { authenticate } from "../middlewares/auth.middleware";
 
 

const ApplicationRouter = Router();

ApplicationRouter.post(
  "/:id",
  authenticate,
  ApplicationController.applyForJob
);

ApplicationRouter.get(
  "/my",
  authenticate,
  ApplicationController.getMyApplications
);

ApplicationRouter.get(
  "/",
   
  authenticate,
  ApplicationController.getAllApplications
);

export default ApplicationRouter;