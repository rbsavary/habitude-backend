import express from "express";
import { Posts } from "../models/index.js";

const router = express.Router();

router.get("/", (req, res) => {
  Posts.find().then(posts => {
    res.json(posts);
  })
    .catch(err => console.log(err));
});

router.get("/:id", (req, res) => {
  Posts.findById(req.params.id).then(post => {
    res.json(post);
  })
    .catch(err => console.log(err));
});

export default router;