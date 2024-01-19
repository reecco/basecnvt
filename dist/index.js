"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.octal = exports.hexadecimal = exports.decimal = exports.char = exports.binary = void 0;
const binary_1 = __importDefault(require("./utils/binary"));
exports.binary = binary_1.default;
const char_1 = __importDefault(require("./utils/char"));
exports.char = char_1.default;
const decimal_1 = __importDefault(require("./utils/decimal"));
exports.decimal = decimal_1.default;
const hexadecimal_1 = __importDefault(require("./utils/hexadecimal"));
exports.hexadecimal = hexadecimal_1.default;
const octal_1 = __importDefault(require("./utils/octal"));
exports.octal = octal_1.default;
const base = {
    binary: binary_1.default,
    char: char_1.default,
    decimal: decimal_1.default,
    hexadecimal: hexadecimal_1.default,
    octal: octal_1.default
};
exports.default = base;
