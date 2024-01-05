import { Router } from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controllers/post.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/").get(getAllPosts).post(upload.array("photos", 8), createPost);
router.route("/:id").get(getPost).patch(updatePost).delete(deletePost);

export default router;
