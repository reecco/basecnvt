"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const SystemBaseError_1 = __importDefault(require("../errors/SystemBaseError"));
exports.default = {
    /**
     * Converts a binary value to decimal.
     *
     * @param {string} value - The binary value to be converted to decimal.
     * @returns {number|string} - The decimal equivalent of the provided binary value.
     *
     */
    toDecimal: (value) => {
        try {
            if (typeof (value) !== "string")
                throw new SystemBaseError_1.default(`The provided value must be a string, but received ${typeof (value)}.`);
            const decimal = value
                .split(" ")
                .reduce((acc, bin) => acc + ` ${parseInt(bin, 2).toString()}`, "")
                .replace(" ", "");
            if (!decimal.split(" ")[1])
                return parseInt(decimal);
            return decimal;
        }
        catch (error) {
            throw error;
        }
    },
    /**
     * Converts a binary value to char.
     *
     * @param {string} value - The binary value to be converted to char.
     * @returns {string} - The char equivalent of the provided binary value.
     *
     */
    toChar: (value) => {
        try {
            if (typeof (value) !== "string")
                throw new SystemBaseError_1.default(`The provided value must be a string, but received ${typeof (value)}.`);
            return value
                .split(" ")
                .reduce((acc, bin) => acc + String.fromCharCode(parseInt(bin, 2)), "");
        }
        catch (error) {
            throw error;
        }
    },
    /**
     * Converts a binary value to hexadecimal.
     *
     * @param {string} value - The binary value to be converted to hexadecimal.
     * @returns {string} - The hexadecimal equivalent of the provided binary value.
     *
     */
    toHexadecimal: (value) => {
        try {
            if (typeof (value) !== "string")
                throw new SystemBaseError_1.default(`The provided value must be a string, but received ${typeof (value)}.`);
            return value
                .split(" ")
                .reduce((acc, bin) => acc + ` ${parseInt(bin, 2).toString()}`, "")
                .replace(" ", "")
                .split(" ")
                .reduce((acc, dec) => acc + ` ${Number(dec).toString(16)}`, "")
                .replace(" ", "");
        }
        catch (error) {
            throw error;
        }
    },
    /**
     * Converts a binary value to octal.
     *
     * @param {string} value - The binary value to be converted to octal.
     * @returns {string|number} - The octal equivalent of the provided binary value.
     *
     */
    toOctal: (value) => {
        try {
            if (typeof (value) !== "string")
                throw new SystemBaseError_1.default(`The provided value must be a string, but received ${typeof (value)}.`);
            const octal = value
                .split(" ")
                .reduce((acc, bin) => acc + ` ${parseInt(bin, 2).toString()}`, "")
                .replace(" ", "")
                .split(" ")
                .reduce((acc, dec) => acc + ` ${Number(dec).toString(8).padStart(3, "0")}`, "")
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
