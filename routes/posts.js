import express from "express";
import {
  getFeedPosts,
  getUserPosts,
  likePost,
  updateComment,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import Post from "../models/Post.js";
import User from "../models/User.js";

const router = express.Router();

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// READ

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

// UPDATE
router.patch("/:id/like", verifyToken, likePost);
router.patch("/updatecomment", verifyToken, updateComment);

router.route("/Ai-post").post(async (req, res) => {
  try {
    const { userId, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description: prompt,
      userPicturePath: user.picturePath,
      picturePath: photoUrl,
      likes: {},
      comments: [],
    });

    await newPost.save();

    const post = await Post.find(); //grabbing all posts

    res.status(201).json(post);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
});

export default router;
