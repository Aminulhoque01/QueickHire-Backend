"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = require("./config/db");
const api_1 = __importDefault(require("./api"));
dotenv_1.default.config();
const PORT = process.env.PORT || 5000;
(0, db_1.connectDB)();
api_1.default.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
