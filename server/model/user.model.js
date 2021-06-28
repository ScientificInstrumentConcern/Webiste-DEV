import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Your email cannot be blank"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Your password cannot be blank"],
    },
  },
  { timestamps: true }
);


userSchema.methods.matchPassword = async function (enteredPassword) {
  let isValidPassword = await bcrypt.compare(enteredPassword, this.password);
  return isValidPassword;
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

const User = mongoose.model("User", userSchema);

export default User;
