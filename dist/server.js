"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const auth_route_1 = __importDefault(require("./modules/auth/auth.route"));
const category_routes_1 = __importDefault(require("./modules/category/category.routes"));
const job_route_1 = __importDefault(require("./modules/job/job.route"));
const application_route_1 = __importDefault(require("./modules/application/application.route"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:3000",
        "https://queick-hire-frontend.vercel.app",
    ],
    credentials: true,
}));
app.use(express_1.default.json());
// Routes
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
// Connect DB & Start Server
(0, db_1.connectDB)()
    .then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
})
    .catch((err) => {
    console.error("❌ Database connection failed:", err);
});
