import mongoose from "mongoose";
import { users, posts } from "./data/index.js";
import User from "./models/User.js";
import Post from "./models/Post.js";

const connectDB = (url) => {
  mongoose.set("strictQuery", true);

  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MONGODB CONNECTED");
      // User.insertMany(users);
      // Post.insertMany(posts);
    })
    .catch((err) => console.log(`ERROR ${err}`));
};

export default connectDB;
