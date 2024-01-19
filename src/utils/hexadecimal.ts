import SystemBaseError from "../errors/SystemBaseError";

export default {
  /**
   * Converts a hexadecimal value to char.
   *
   * @param {string} value - The hexadecimal value to be converted to char.
   * @returns {string} - The char equivalent of the provided hexadecimal value.
   *
   */
  toChar: (value: string): string => {
    try {
      if (typeof (value) !== "string")
        throw new SystemBaseError(
          `The provided value must be a string, but received ${typeof (value)}.`
        );

      return value
        .split(" ")
        .reduce((acc, hex) => acc + String.fromCharCode(parseInt(hex, 16)), "");
    } catch (error) {
      throw error;
    }
  },

  /**
   * Converts a hexadecimal value to decimal.
   *
   * @param {string} value - The hexadecimal value to be converted to decimal.
   * @returns {string|number} - The decimal equivalent of the provided hexadecimal value.
   *
   */
  toDecimal: (value: string): string | number => {
    try {
      if (typeof (value) !== "string")
        throw new SystemBaseError(
          `The provided value must be a string, but received ${typeof (value)}.`
        );

      const decimal = value
        .split(" ")
        .reduce((acc, hex) => acc + ` ${parseInt(hex, 16)}`, "")
        .replace(" ", "");

      if (!decimal.split(" ")[1]) return parseInt(decimal);

      return decimal;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Converts a hexadecimal value to binary.
   *
   * @param {string} value - The hexadecimal value to be converted to binary.
   * @returns {string} - The binary equivalent of the provided hexadecimal value.
   *
   */
  toBinary: (value: string): string => {
    try {
      if (typeof (value) !== "string")
        throw new SystemBaseError(
          `The provided value must be a string, but received ${typeof (value)}.`
        );

      return value
        .split(" ")
        .reduce((acc, hex) => {
          return acc + ` ${(parseInt(hex, 16).toString(2)).padStart(8, "0")}`;
        }, "")
        .replace(" ", "");
    } catch (error) {
      throw error;
    }
  },

  /**
   * Converts a hexadecimal value to octal.
   *
   * @param {string} value - The hexadecimal value to be converted to octal.
   * @returns {string|number} - The octal equivalent of the provided hexadecimal value.
   *
   */
  toOctal: (value: string): string | number => {
    try {
      if (typeof (value) !== "string")
        throw new SystemBaseError(
          `The provided value must be a string, but received ${typeof (value)}.`
        );

      const octal = value
        .split(" ")
        .reduce((acc, hex) => {
          return acc + ` ${(parseInt(hex, 16).toString(8)).padStart(3, "0")}`;
        }, "")
        .replace(" ", "");

      if (!octal.split(" ")[1]) return parseInt(octal);

      return octal;
    } catch (error) {
      throw error;
    }
  }
}