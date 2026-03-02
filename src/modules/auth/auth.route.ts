import { Router } from "express";
import { AuthController } from "./auth.controller";

const AuthRouter = Router();

AuthRouter.post("/register", AuthController.signup);
AuthRouter.post("/login", AuthController.signin);

export default AuthRouter;