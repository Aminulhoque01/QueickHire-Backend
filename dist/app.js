"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const job_route_1 = __importDefault(require("./modules/job/job.route"));
const application_route_1 = __importDefault(require("./modules/application/application.route"));
const auth_route_1 = __importDefault(require("./modules/auth/auth.route"));
const category_routes_1 = __importDefault(require("./modules/category/category.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/category", category_routes_1.default);
app.use("/job", job_route_1.default);
app.use("/apply", application_route_1.default);
app.use("/auth", auth_route_1.default);
exports.default = app;
