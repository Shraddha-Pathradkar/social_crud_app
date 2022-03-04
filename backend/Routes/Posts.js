import express from "express";
import {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
} from "../Controllers/Posts.js";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.patch("/:id", updatePosts);
router.delete("/:id", deletePosts);

export default router;
