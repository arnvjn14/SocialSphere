import express from "express";
import bodyParser from "body-parser"; // It is not required nowadays.
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";

import path from "path";
import { fileURLToPath } from "url";
// These two packages are comes with node only and uses in setting up directories

// configurations
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();

app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// OR
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));

app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

app.use(morgan("common"));

app.use(cors()); // FRONTEND KO BACKEND SE JODNE K LIYE MOST PROBABLY

app.use("/assets", express.static(path.join(__dirname, "public/assets")));

// FILE STORAGE

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

// DiskStorage. The disk storage engine gives you full control on storing files to disk. There are two options available, destination and filename . They are both functions that determine where the file should be stored.
const upload = multer({ storage });

// MONGOOSE SETUP

const PORT = process.env.PORT || 6001;

// ONLINE ATLAS CONNECTION

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     app.listen(PORT, () => console.log("SERVER PORT: ---"));

//     // ADD DATA ONLY ONE TIME
//     User.insertMany(users);
//     Post.insertMany(posts);
//   })
//   .catch((err) => console.log(`ERROR ${err}`));

// // LOCAL CONNECTION
// mongoose.connect("mongodb://localhost:27017/website", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // REQUIRED
// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//   console.log("Database connected");

//   // console.log(users);
//   // console.log(posts);

//   // ADD DATA ONLY ONE TIME
//   // User.insertMany(users);
//   // Post.insertMany(posts);
// });

connectDB(process.env.MONGO_URL);

app.listen(PORT, () => {
  console.log(`Serving on port ${PORT}`);
});

import { register } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import apiRoutes from "./routes/apiRoutes.js";
import { verifyToken } from "./middleware/auth.js";
import { createPost } from "./controllers/posts.js";
import connectDB from "./connect.js";

// ROUTES WITH FILES
app.post("/auth/register", upload.single("picture"), register);
app.post("/posts", verifyToken, upload.single("picture"), createPost);

// ROUTES
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/api/v1/api", apiRoutes);
