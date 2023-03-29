import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import Env from "./loadenv.js";
import { Posts } from "./models/index.js";
import PostsSeed from "./seed.js";
import { posts as postsRouter } from "./controllers/index.js";

const env = Env();
const app = express();
const PORT = env.server.port;

mongoose.connect(env.database.MONGODB_URI);

app.use(express.json());
app.use(cors());
app.use("/posts", postsRouter);


// Routes
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