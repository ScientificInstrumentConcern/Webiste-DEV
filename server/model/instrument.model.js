 import mongoose from "mongoose";

const InstrumentSchema = new mongoose.Schema(
  {
    name: String,
    desc: String,
    itemImg:  {
      type: String,
      required: [true, "Your instrument image cannot be blank"],
    },
    descImg: {
      type: String,
      required: [true, "Your instrument Description cannot be blank"],
    },
    code: {
      type: String,
      required: [true, "Your instrument Id cannot be blank"],
      unique: true,
    },
    optionalImage:{
      type: String,
    }
  },
  { timestamps: true }
);

const Instrument = mongoose.model("Instrument", InstrumentSchema);

export default Instrument;
