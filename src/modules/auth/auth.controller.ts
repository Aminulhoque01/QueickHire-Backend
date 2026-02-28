import { Request, Response } from "express";
import { AuthService } from "./auth.service";

const signup = async (req: Request, res: Response) => {
  const result = await AuthService.signupUser(req.body);

  res.status(201).json({
    success: true,
    message: "User registered successfully",
    data: result
  });
};

const signin = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const result = await AuthService.signinUser(email, password);

  res.status(200).json({
    success: true,
    message: "Login successful",
    data: result
  });
};

export const AuthController = {
  signup,
  signin
};