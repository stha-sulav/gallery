import { ApiError } from "../utils/ApiError.js";
import { asynHandler } from "../utils/asyncHandler.js";

/*
    @desc Get all posts
    @route /api/v1/posts
    @access Private
*/
const getAllPosts = asynHandler(async (req, res, next) => {
  res.json({ message: ok });
});

/*
    @desc Get  post
    @route /api/v1/posts/:id
    @access Private
*/
const getPost = asynHandler(async (req, res, next) => {
  res.json({ message: "ok" });
});

/*
    @desc Create post
    @route /api/v1/posts
    @access Private
*/
const createPost = asynHandler(async (req, res, next) => {
  res.json({ message: "ok" });
});

/*
    @desc Update post
    @route /api/v1/posts/:id
    @access Private
*/
const updatePost = asynHandler(async (req, res, next) => {
  res.json({ message: "ok" });
});
/*
    @desc Delete post
    @route /api/v1/posts/:id
    @access Private
*/
const deletePost = asynHandler(async (req, res, next) => {
  res.json({ message: "ok" });
});

export { getAllPosts, getPost, createPost, updatePost, deletePost };
