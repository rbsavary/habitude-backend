import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ContactsSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  comments: { type: String, required: true }
});

const Contacts = mongoose.model("Contacts", ContactsSchema);
export default Contacts;