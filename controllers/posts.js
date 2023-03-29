import express from "express";
import { Posts } from "../models/index.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { title, image, article, tags, author, date } = req.body;
  Posts.create({ title, image, article, tags, author, date })
    .then(post => {
      res.json(post);
    })
    .catch(err => console.log(err));
});

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

router.put("/:id", (req, res) => {
  const { title, image, article, tags, author, date } = req.body;
  const updatedPost = { title, image, article, tags, author, date };
  Posts.findByIdAndUpdate({
    _id: req.params.id
  }, updatedPost)
    .then(post => {
      updatedPost._id = post._id;
      res.json(updatedPost);
    })
    .catch(err => console.log(err));
});

router.delete("/:id", (req, res) => {
  Posts.findByIdAndDelete(req.params.id).then(deleted => {
    res.json(deleted);
  })
    .catch(err => console.log(err));
})

export default router;