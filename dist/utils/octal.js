"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SystemBaseError_1 = __importDefault(require("../errors/SystemBaseError"));
exports.default = {
    /**
     * Converts a octal value to char.
     *
     * @param {string} value - The octal value to be converted to char.
     * @returns {string} - The char equivalent of the provided octal value.
     *
     */
    toChar: (value) => {
        try {
            if (typeof (value) !== "string")
                throw new SystemBaseError_1.default(`The provided value must be a string, but received ${typeof (value)}.`);
            return value
                .split(" ")
                .reduce((acc, octal) => acc + String.fromCharCode(parseInt(octal, 8)), "");
        }
        catch (error) {
            throw error;
        }
    },
    /**
     * Converts a octal value to decimal.
     *
     * @param {string|number} value - The octal value to be converted to decimal.
     * @returns {string|number} - The decimal equivalent of the provided octal value.
     *
     */
    toDecimal: (value) => {
        try {
            if (typeof (value) !== "string" && typeof (value) !== "number")
                throw new SystemBaseError_1.default(`The provided value must be a string or number, but received ${typeof (value)}.`);
            if (typeof (value) == "number")
                return parseInt(value.toString(), 8);
            return value
                .split(" ")
                .reduce((acc, octal) => acc + ` ${parseInt(octal, 8)}`, "")
                .replace(" ", "");
        }
        catch (error) {
            throw error;
        }
    },
    /**
     * Converts a octal value to hexadecimal.
     *
     * @param {string|number} value - The octal value to be converted to hexadecimal.
     * @returns {string} - The hexadecimal equivalent of the provided octal value.
     *
     */
    toHexadecimal: (value) => {
        try {
            if (typeof (value) !== "string" && typeof (value) !== "number")
                throw new SystemBaseError_1.default(`The provided value must be a string or number, but received ${typeof (value)}.`);
            if (typeof (value) == "number")
                return parseInt(value.toString(), 8).toString(16);
            return value
                .split(" ")
                .reduce((acc, octal) => acc + ` ${parseInt(octal, 8).toString(16)}`, "")
                .replace(" ", "");
        }
        catch (error) {
            throw error;
        }
    },
    /**
     * Converts a octal value to binary.
     *
     * @param {string|number} value - The octal value to be converted to binary.
     * @returns {string} - The binary equivalent of the provided octal value.
     *
     */
    toBinary: (value) => {
        try {
            if (typeof (value) !== "string" && typeof (value) !== "number")
                throw new SystemBaseError_1.default(`The provided value must be a string or number, but received ${typeof (value)}.`);
            if (typeof (value) == "number")
                return parseInt(value.toString(), 8).toString(2).padStart(8, "0");
            return value
                .split(" ")
                .reduce((acc, octal) => acc + ` ${(parseInt(octal, 8).toString(2)).padStart(8, "0")}`, "")
                .replace(" ", "");
        }
        catch (error) {
            throw error;
        }
    }
};
