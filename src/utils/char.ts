import SystemBaseError from "../errors/SystemBaseError";

export default {
  /**
   * Converts a char value to binary.
   *
   * @param {string} value - The char value to be converted to binary.
   * @returns {string} - The binary equivalent of the provided char value.
   *
   */
  toBinary: (value: string): string => {
    try {
      if (typeof (value) !== "string")
        throw new SystemBaseError(
          `The provided value must be a string, but received ${typeof (value)}.`
        );

      return value.split("").map((char) =>
        char.charCodeAt(0).toString(2).padStart(8, "0")).join(" ");
    } catch (error) {
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
  toHexadecimal: (value: string): string => {
    try {
      if (typeof (value) !== "string")
        throw new SystemBaseError(
          `The provided value must be a string, but received ${typeof (value)}.`
        );

      return Array.from(value).map((char) => {
        return ("0" + char.charCodeAt(0).toString(16)).slice(-2);
      }).join(" ");
    } catch (error) {
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
  toOctal: (value: string): string => {
    try {
      if (typeof (value) !== "string")
        throw new SystemBaseError(
          `The provided value must be a string, but received ${typeof (value)}.`
        );

      return Array.from(value).map((char) => {
        return char.charCodeAt(0).toString(8).padStart(3, "0");
      }).join(" ");
    } catch (error) {
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
  toDecimal: (value: string): string => {
    try {
      if (typeof (value) !== "string")
        throw new SystemBaseError(
          `The provided value must be a string, but received ${typeof (value)}.`
        );

      return value.split("").map((char) => char.charCodeAt(0).toString()).join(" ");
    } catch (error) {
      throw error;
    }
  }
}