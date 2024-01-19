import { char, binary, hexadecimal, octal, decimal } from "../src/";

const charValue = "New Test.";
const binaryValue = "01001110 01100101 01110111 00100000 01010100 01100101 01110011 01110100 00101110";
const hexValue = "4e 65 77 20 54 65 73 74 2e";
const octalValue = "116 145 167 040 124 145 163 164 056";
const decimalValue = "78 101 119 32 84 101 115 116 46";

describe("Char converter", () => {
  test("Char to decimal", () => {
    expect(char.toDecimal(charValue)).toBe(decimalValue);
  });

  test("Char to binary", () => {
    expect(char.toBinary(charValue)).toBe(binaryValue);
  });

  test("Char to hexadecimal", () => {
    expect(char.toHexadecimal(charValue)).toBe(hexValue);
  });

  test("Char to octal", () => {
    expect(char.toOctal(charValue)).toBe(octalValue);
  });
});

describe("Binary converter", () => {
  test("Binary to char", () => {
    expect(binary.toChar(binaryValue)).toBe(charValue);
  });

  test("Binary to decimal", () => {
    expect(binary.toDecimal(binaryValue)).toBe(decimalValue);
  });

  test("Binary to hexadecimal", () => {
    expect(binary.toHexadecimal(binaryValue)).toBe(hexValue);
  });

  test("Binary to octal", () => {
    expect(binary.toOctal(binaryValue)).toBe(octalValue);
  });
});

describe("Hexadecimal converter", () => {
  test("Hexadecimal to char", () => {
    expect(hexadecimal.toChar(hexValue)).toBe(charValue);
  });

  test("Hexadecimal to decimal", () => {
    expect(hexadecimal.toDecimal(hexValue)).toBe(decimalValue);
  });

  test("Hexadecimal to binary", () => {
    expect(hexadecimal.toBinary(hexValue)).toBe(binaryValue);
  });

  test("Hexadecimal to binary", () => {
    expect(hexadecimal.toOctal(hexValue)).toBe(octalValue);
  });
});

describe("Octal converter", () => {
  test("Octal to decimal", () => {
    expect(octal.toDecimal(octalValue)).toBe(decimalValue);
  });

  test("Octal to binary", () => {
    expect(octal.toBinary(octalValue)).toBe(binaryValue);
  });

  test("Octal to hexadecimal", () => {
    expect(octal.toHexadecimal(octalValue)).toBe(hexValue);
  });

  test("Octal to char", () => {
    expect(octal.toChar(octalValue)).toBe(charValue);
  });
});

describe("Decimal converter", () => {
  test("Decimal to char", () => {
    expect(decimal.toChar(decimalValue)).toBe(charValue);
  });

  test("Decimal to hexadecimal", () => {
    expect(decimal.toHexadecimal(decimalValue)).toBe(hexValue);
  });

  test("Decimal to binary", () => {
    expect(decimal.toBinary(decimalValue)).toBe(binaryValue);
  });

  test("Decimal to octal", () => {
    expect(decimal.toOctal(decimalValue)).toBe(octalValue);
  });
});