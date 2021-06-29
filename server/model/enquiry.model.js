import mongoose from "mongoose";

const EnquirySchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    company: String,
    country: String,
    city: String,
    specification: String,
    instrumentName: String,
  },
  { timestamps: true }
);

const Enquiry = mongoose.model("Enquiry", EnquirySchema);

export default Enquiry;