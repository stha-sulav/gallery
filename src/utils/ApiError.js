class ApiErrorClass extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const ApiError = (statusCode, msg) => {
  return new ApiErrorClass(msg, statusCode);
};

export { ApiErrorClass, ApiError };
