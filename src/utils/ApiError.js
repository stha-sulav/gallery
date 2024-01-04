class ApiErrorClass extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const ApiError = (msg, statusCode) => {
  return new ApiErrorClass(msg, statusCode);
};

export { ApiErrorClass, ApiError };
