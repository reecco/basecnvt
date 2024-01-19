class SystemBaseError extends Error {
  constructor(message: string = "An error occurs when performing the conversion.") {
    super(message);
  }
}

export default SystemBaseError;