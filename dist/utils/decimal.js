"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SystemBaseError_1 = __importDefault(require("../errors/SystemBaseError"));
exports.default = {
    /**
     * Converts a decimal value to char.
     *
     * @param {string} value - The decimal value to be converted to char.
     * @returns {string} - The char equivalent of the provided decimal value.
     *
     */
    toChar: (value) => {
        try {
            if (typeof (value) !== "string")
                throw new SystemBaseError_1.default(`The provided value must be a string or number, but received ${typeof (value)}.`);
            return String(value)
                .split(" ")
                .reduce((acc, dec) => acc + String.fromCharCode(parseInt(dec)), "");
        }
        catch (error) {
            throw error;
        }
    },
    /**
     * Converts a decimal value to binary.
     *
     * @param {string} value - The decimal value to be converted to binary.
     * @returns {string} - The binary equivalent of the provided decimal value.
     *
     */
    toBinary: (value) => {
        try {
            if (typeof (value) !== "string" && typeof (value) !== "number")
                throw new SystemBaseError_1.default(`The provided value must be a string or number, but received ${typeof (value)}.`);
            if (typeof (value) == "number")
                return Number(value).toString(2);
            return value
                .split(" ")
                .reduce((acc, dec) => acc + ` ${(Number(dec).toString(2)).padStart(8, "0")}`, "")
                .replace(" ", "");
        }
        catch (error) {
            throw error;
        }
    },
    /**
     * Converts a decimal value to hexadecimal.
     *
     * @param {string} value - The decimal value to be converted to hexadecimal.
     * @returns {string} - The hexadecimal equivalent of the provided decimal value.
     *
     */
    toHexadecimal: (value) => {
        try {
            if (typeof (value) !== "string" && typeof (value) !== "number")
                throw new SystemBaseError_1.default(`The provided value must be a string or number, but received ${typeof (value)}.`);
            if (typeof (value) == "number")
                return Number(value).toString(16);
            return value
                .split(" ")
                .reduce((acc, dec) => acc + ` ${Number(dec).toString(16)}`, "")
                .replace(" ", "");
        }
        catch (error) {
            throw error;
        }
    },
    /**
     * Converts a decimal value to octal.
     *
     * @param {string} value - The decimal value to be converted to octal.
     * @returns {string|number} - The decimal equivalent of the provided binary string.
     *
     */
    toOctal: (value) => {
        try {
            if (typeof (value) !== "string" && typeof (value) !== "number")
                throw new SystemBaseError_1.default(`The provided value must be a string or number, but received ${typeof (value)}.`);
            if (typeof (value) == "number")
                return Number(value).toString(8);
            const octal = value
                .split(" ")
                .reduce((acc, dec) => acc + ` ${(Number(dec).toString(8)).padStart(3, "0")}`, "")
                .replace(" ", "");
            if (!octal.split(" ")[1])
                return parseInt(octal);
            return octal;
        }
        catch (error) {
            throw error;
        }
    }
};
