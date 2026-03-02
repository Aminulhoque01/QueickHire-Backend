"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_model_1 = require("./auth.model");
const signupUser = async (payload) => {
    const hashedPassword = await bcryptjs_1.default.hash(payload.password, 10);
    const user = await auth_model_1.User.create({
        ...payload,
        password: hashedPassword
    });
    return user;
};
const signinUser = async (email, password) => {
    const user = await auth_model_1.User.findOne({ email });
    if (!user) {
        throw new Error("User not found");
    }
    const isPasswordMatched = await bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordMatched) {
        throw new Error("Invalid credentials");
    }
    const token = jsonwebtoken_1.default.sign({ id: user._id, email: user.email, name: user.name, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1d" });
    return { token };
};
exports.AuthService = {
    signupUser,
    signinUser
};
