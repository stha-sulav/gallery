import { asynHandler } from "../utils/asyncHandler.js";

/*
    @desc Get all posts
    @route /api/v1/posts/:id
    @access Private
*/
const getAllPosts = asynHandler(async (req, res) => {
  throw new Error("test");
  res.json({ message: "ok" });
});

export { getAllPosts };
