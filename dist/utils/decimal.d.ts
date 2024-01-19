declare const _default: {
    /**
     * Converts a decimal value to char.
     *
     * @param {string} value - The decimal value to be converted to char.
     * @returns {string} - The char equivalent of the provided decimal value.
     *
     */
    toChar: (value: string) => string;
    /**
     * Converts a decimal value to binary.
     *
     * @param {string} value - The decimal value to be converted to binary.
     * @returns {string} - The binary equivalent of the provided decimal value.
     *
     */
    toBinary: (value: string | number) => string;
    /**
     * Converts a decimal value to hexadecimal.
     *
     * @param {string} value - The decimal value to be converted to hexadecimal.
     * @returns {string} - The hexadecimal equivalent of the provided decimal value.
     *
     */
    toHexadecimal: (value: string | number) => string;
    /**
     * Converts a decimal value to octal.
     *
     * @param {string} value - The decimal value to be converted to octal.
     * @returns {string|number} - The decimal equivalent of the provided binary string.
     *
     */
    toOctal: (value: string | number) => string | number;
};
export default _default;
