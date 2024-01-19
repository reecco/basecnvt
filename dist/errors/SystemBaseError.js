"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SystemBaseError extends Error {
    constructor(message = "An error occurs when performing the conversion.") {
        super(message);
    }
}
exports.default = SystemBaseError;
