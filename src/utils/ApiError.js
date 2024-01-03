class ApiErrorClass extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
  }
}

const ApiError = (msg, statusCode) => {
  return ApiErrorClass(msg, statusCode);
};

export { ApiErrorClass, ApiError };
