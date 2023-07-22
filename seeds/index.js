import { users } from "../data/index.js";
import { posts } from "../data/index.js";
import dotenv from "dotenv";
import express from "express";
const app = express();

import mongoose from "mongoose";
import User from "../models/User.js";
import Post from "../models/Post.js";

dotenv.config();

const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log("SERVER PORT: ---"));
    User.insertMany(users);
    Post.insertMany(posts);
    // console.log(users);
    // console.log(posts);
    // ADD DATA ONLY ONE TIME
  })
  .catch((err) => console.log(`ERRORhii ${err}`));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});
