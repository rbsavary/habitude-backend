import express from "express";
import { Contacts } from "../models/index.js";

const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, comments } = req.body;
  Contacts.create({ name, email, comments }).then(contact => {
    res.json(contact);
  });
});

router.get("/", (req, res) => {
  Contacts.find().then(contacts => {
    res.json(contacts);
  });
});

export default router;