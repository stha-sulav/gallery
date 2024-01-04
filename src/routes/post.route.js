import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controllers/post.controller.js";

const router = Router();

router.route("/").get(getAllPosts).post(createPost);
router.route("/:id").get(getPost).patch(updatePost).delete(deletePost);

export default router;
