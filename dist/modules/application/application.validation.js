"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateApplication = void 0;
const express_validator_1 = require("express-validator");
exports.validateApplication = [
    (0, express_validator_1.body)("email").isEmail(),
    (0, express_validator_1.body)("resumeLink").isURL(),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];
