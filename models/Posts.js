import mongoose from "mongoose";

const Schema = mongoose.Schema;
const postsSchema = new Schema({
  title: { type: String, required: true },
  article: { type: String, required: true },
  author: { type: String, required: true },
  // TODO: Convert to Date object
  date: { type: String, required: true },
  // TODO: Convert to an array
  tags: { type: String, required: true },
  image: String
});
const Posts = mongoose.model("Posts", postsSchema);

export default Posts;