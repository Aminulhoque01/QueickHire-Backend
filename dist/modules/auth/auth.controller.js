"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const signup = async (req, res) => {
    const result = await auth_service_1.AuthService.signupUser(req.body);
    res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: result
    });
};
const signin = async (req, res) => {
    const { email, password } = req.body;
    const result = await auth_service_1.AuthService.signinUser(email, password);
    res.status(200).json({
        success: true,
        message: "Login successful",
        data: result
    });
};
exports.AuthController = {
    signup,
    signin
};
