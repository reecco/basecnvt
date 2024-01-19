import binary from "./utils/binary";
import char from "./utils/char";
import decimal from "./utils/decimal";
import hexadecimal from "./utils/hexadecimal";
import octal from "./utils/octal";
declare const base: {
    binary: {
        toDecimal: (value: string) => string | number;
        toChar: (value: string) => string;
        toHexadecimal: (value: string) => string;
        toOctal: (value: string) => string | number;
    };
    char: {
        toBinary: (value: string) => string;
        toHexadecimal: (value: string) => string;
        toOctal: (value: string) => string;
        toDecimal: (value: string) => string;
    };
    decimal: {
        toChar: (value: string) => string;
        toBinary: (value: string | number) => string;
        toHexadecimal: (value: string | number) => string;
        toOctal: (value: string | number) => string | number;
    };
    hexadecimal: {
        toChar: (value: string) => string;
        toDecimal: (value: string) => string | number;
        toBinary: (value: string) => string;
        toOctal: (value: string) => string | number;
    };
    octal: {
        toChar: (value: string) => string;
        toDecimal: (value: string | number) => string | number;
        toHexadecimal: (value: string | number) => string;
        toBinary: (value: string | number) => string;
    };
};
export { binary, char, decimal, hexadecimal, octal };
export default base;
