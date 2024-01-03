import { ApiError } from "../utils/ApiError.js";
import { asynHandler } from "../utils/asyncHandler.js";

/*
    @desc Get all posts
    @route /api/v1/posts/:id
    @access Private
*/
const getAllPosts = asynHandler(async (req, res, next) => {
  return next(ApiError("test", 400));
  res.json({ message: "ok" });
});

export { getAllPosts };
