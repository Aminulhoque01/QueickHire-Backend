"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_route_1 = __importDefault(require("../src/modules/auth/auth.route"));
const category_routes_1 = __importDefault(require("../src/modules/category/category.routes"));
const job_route_1 = __importDefault(require("../src/modules/job/job.route"));
const application_route_1 = __importDefault(require("../src/modules/application/application.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://queick-hire-frontend.vercel.app",
    ],
    credentials: true,
}));
app.use(express_1.default.json());
app.use("/auth", auth_route_1.default);
app.use("/category", category_routes_1.default);
app.use("/job", job_route_1.default);
app.use("/apply", application_route_1.default);
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "🚀 Server is running successfully",
    });
});
exports.default = app;
