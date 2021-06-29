 import mongoose from "mongoose";

const InstrumentSchema = new mongoose.Schema(
  {
    name: String,
    desc: String,
    itemImg: String,
    descImg: String,
    code: {
      type: String,
      required: [true, "Your instrument Id cannot be blank"],
      unique: true,
    },
  },
  { timestamps: true }
);

const Instrument = mongoose.model("Instrument", InstrumentSchema);

export default Instrument;
