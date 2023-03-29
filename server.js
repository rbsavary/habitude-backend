import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import Env from "./loadenv.js";
import Posts from "./models/Posts.js";
import PostsSeed from "./seed.js";

const env = Env();
const app = express();
const PORT = env.server.port;

mongoose.connect(env.database.MONGODB_URI);

app.use(express.json());
app.use(cors());

app.get("/seed", (req, res) => {
  Posts.create(PostsSeed).then(posts => {
    res.redirect("/");
  })
    .catch(err => console.log(err));
})

app.get("/", (req, res) => {
  Posts.find().then(posts => {
    res.json(posts);
  })
    .catch(err => console.log(err));
})

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));