"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const authorize = (...roles) => {
    return (req, res, next) => {
        const user = req.user;
        if (!roles.includes(user.role)) {
            return res.status(403).json({
                message: "Forbidden: You do not have permission"
            });
        }
        next();
    };
};
exports.authorize = authorize;
