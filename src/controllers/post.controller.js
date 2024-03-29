import { ApiError } from "../utils/ApiError.js";
import { asynHandler } from "../utils/asyncHandler.js";
import {
  deleteFromCloudinary,
  uploadOnCloudinary,
} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Post } from "../models/post.model.js";

/*
    @desc Get all posts
    @route /api/v1/posts
    @access Private
*/
const getAllPosts = asynHandler(async (req, res) => {
  const allPosts = await Post.find({});
  res
    .status(200)
    .json(new ApiResponse(200, "All posts fetched successfully", allPosts));
});

/*
    @desc Get  post
    @route /api/v1/posts/:id
    @access Private
*/
const getPost = asynHandler(async (req, res) => {
  const { id } = req.params;

  const isIdValid = Post.isIdValid(id);

  if (!isIdValid) {
    throw ApiError(400, "Invalid Id");
  }

  const post = await Post.findById(id);

  if (!post) {
    throw ApiError(404, "No such post found");
  }

  res.status(200).json(new ApiResponse(200, "Post found", post));
});

/*
    @desc Create post
    @route /api/v1/posts
    @access Private
*/
const createPost = asynHandler(async (req, res) => {
  const { caption } = req.body;
  const { files } = req;

  if (files.length === 0) {
    throw ApiError(400, "Please select one or more photos and try again later");
  }

  if (files.length > 8) {
    throw ApiError(400, "only upto 8 photos are supported");
  }

  const newPost = await Post.create({
    caption: caption || "",
    photos: await Promise.all(
      files.map(async (file) => {
        return await uploadOnCloudinary(file.path);
      })
    ),
  });

  res.status(200).json(new ApiResponse(200, "Created Successfully", newPost));
});

/*
    @desc Update post
    @route /api/v1/posts/:id
    @access Private
*/
const updatePost = asynHandler(async (req, res) => {
  const { caption } = req.body;
  const { id } = req.params;

  const isIdValid = Post.isIdValid(id);

  if (!isIdValid) {
    throw ApiError(400, "Invalid Id");
  }

  const post = await Post.findById(id);

  if (!post) {
    throw ApiError(404, "No such post found");
  }

  const updatedPost = await Post.findByIdAndUpdate(
    id,
    {
      caption: caption || "",
    },
    { new: true }
  );

  res.status(200).json(new ApiResponse(200, "Post Updated", updatedPost));
});
/*
    @desc Delete post
    @route /api/v1/posts/:id
    @access Private
*/
const deletePost = asynHandler(async (req, res) => {
  const { id } = req.params;

  const isIdValid = Post.isIdValid(id);

  if (!isIdValid) {
    throw ApiError(400, "Invalid Id");
  }

  const post = await Post.findById(id);

  if (!post) {
    throw ApiError(404, "No such post found");
  }

  post.photos.forEach(async (item) => {
    console.log(item);
    await deleteFromCloudinary(item.public_id);
  });

  const deletedPost = await Post.findByIdAndDelete(id);

  res
    .status(200)
    .json(new ApiResponse(200, "Successfuly deleted", deletedPost));
});

export { getAllPosts, getPost, createPost, updatePost, deletePost };
