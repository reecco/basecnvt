"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SystemBaseError_1 = __importDefault(require("../errors/SystemBaseError"));
exports.default = {
    /**
     * Converts a char value to binary.
     *
     * @param {string} value - The char value to be converted to binary.
     * @returns {string} - The binary equivalent of the provided char value.
     *
     */
    toBinary: (value) => {
        try {
            if (typeof (value) !== "string")
                throw new SystemBaseError_1.default(`The provided value must be a string, but received ${typeof (value)}.`);
            return value.split("").map((char) => char.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
        }
        catch (error) {
            throw error;
        }
    },
    /**
     * Converts a char value to hexadecimal.
     *
     * @param {string} value - The char value to be converted to hexadecimal.
     * @returns {string} - The hexadecimal equivalent of the provided char value.
     *
     */
    toHexadecimal: (value) => {
        try {
            if (typeof (value) !== "string")
                throw new SystemBaseError_1.default(`The provided value must be a string, but received ${typeof (value)}.`);
            return Array.from(value).map((char) => {
                return ("0" + char.charCodeAt(0).toString(16)).slice(-2);
            }).join(" ");
        }
        catch (error) {
            throw error;
        }
    },
    /**
     * Converts a char value to octal.
     *
     * @param {string} value - The char value to be converted to octal.
     * @returns {string} - The octal equivalent of the provided char value.
     *
     */
    toOctal: (value) => {
        try {
            if (typeof (value) !== "string")
                throw new SystemBaseError_1.default(`The provided value must be a string, but received ${typeof (value)}.`);
            return Array.from(value).map((char) => {
                return char.charCodeAt(0).toString(8).padStart(3, "0");
            }).join(" ");
        }
        catch (error) {
            throw error;
        }
    },
    /**
     * Converts a char value to decimal.
     *
     * @param {string} value - The char value to be converted to decimal.
     * @returns {string} - The decimal equivalent of the provided char value.
     *
     */
    toDecimal: (value) => {
        try {
            if (typeof (value) !== "string")
                throw new SystemBaseError_1.default(`The provided value must be a string, but received ${typeof (value)}.`);
            return value.split("").map((char) => char.charCodeAt(0).toString()).join(" ");
        }
        catch (error) {
            throw error;
        }
    }
};
