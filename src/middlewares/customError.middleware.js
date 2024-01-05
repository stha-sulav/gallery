import { ApiErrorClass } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const errorHandlerMiddleware = (err, req, res, next) => {
  const { statusCode, message } = err;
  if (err instanceof ApiErrorClass) {
    return res
      .status(err.statusCode)
      .json(new ApiResponse(statusCode, message));
  }
  return res
    .status(500)
    .json(new ApiResponse(500, "Something went wrong please try again later"));
};
