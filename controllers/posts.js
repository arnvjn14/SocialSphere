import Post from "../models/Post.js";
import User from "../models/User.js";
// import { v2 as cloudinary } from "cloudinary";
// import * as dotenv from "dotenv";

// dotenv.config();

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

// CREATE

export const createPost = async (req, res) => {
  try {
    const { userId, description, picturePath } = req.body;

    // console.log(picturePath);
    // const photoUrl = await cloudinary.uploader.upload(picturePath);
    // console.log(photoUrl);

    const user = await User.findById(userId);
    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newPost.save();
    const post = await Post.find(); //grabbing all posts

    res.status(201).json(post);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// READ
export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find(); //grabbing all posts
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const { userId } = req.params;
    const post = await Post.find({ userId });
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// UPDATE

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body; //frontend se layenge
    const post = await Post.findById(id);
    const isLiked = post.likes.get(userId);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likes: post.likes },
      { new: true }
    );
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//UPDATE

export const updateComment = async (req, res) => {
  try {
    const { postId, comment } = req.body;
    console.log(comment);
    if (!postId || !comment) {
      res.status(404).json({ message: "Something is missing" });
    }
    const post = await Post.findById(postId);
    const temp = post.comments;
    temp.push(comment);
    console.log(temp);
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      {
        comments: temp,
      },
      { new: true }
    );
    // console.log(updatedPost);

    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
