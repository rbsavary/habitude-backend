import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import dotenv from "dotenv";
import { Posts } from "./models/index.js";
import PostsSeed from "./seed.js";
import { posts as postsRouter } from "./controllers/index.js";

dotenv.config();
const app = express();
const { env } = process;
const PORT = env.PORT;

mongoose.connect(env.MONGODB_URI);

app.use(express.json());
app.use(cors());
app.use("/posts", postsRouter);


// Run to seed local db
app.get("/seed", (req, res) => {
  Posts.create(PostsSeed).then(posts => {
    res.redirect("/posts");
  })
    .catch(err => console.log(err));
})

app.get("/", (req, res) => {
  res.redirect("/posts");
})

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));