import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    company: String,
    country: String,
    city: String,
    query: String,
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;