import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.MONGODB_URI);


const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Ben and Steve under construction...");
})

app.listen(PORT, () => console.log(`listening on port ${PORT}...`));