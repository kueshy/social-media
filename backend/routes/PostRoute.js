import express from "express";
import {
  createPost,
  deletePost,
  getPost,
  getTimelinePosts,
  likePost,
  updatePost,
} from "../controllers/PostController.js";
const router = express.Router();

router.post("/posts", createPost);
router.get("/post/:id", getPost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);
router.put("/post/:id/like", likePost);
router.get("/post/:id/timeline", getTimelinePosts);
export default router;
