import { ApiErrorClass } from "../utils/ApiError.js";

export const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof ApiErrorClass) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "Something went wrong plese try again later" });
};
