import User from "../model/user.model.js";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateJwt.js";

/**
 * @description register a new user
 * @route POST api/admin/register
 * @admin
 */

export const createUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email: email });
  if (user) {
    res.status(401);
    throw new Error("User already exists");
  }

  const newUser = await User.create({
    name,
    email,
    password,
  });
  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    });
  } else {
    res.status(400);
    throw new Error("Unable to create user");
  }
});

/**
 * @description authenticate existing users and get auth token
 * @route GET /api/admin/login
 * @admin
 *
 */

export const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Email or password is invalid");
  }
});

/**
 * @description Check the admin users
 * @route GET /api/admin
 * @admin
 *
 */
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(404).json({ message: error.message });
  }
});

// @purpose: Delete user
// @route: api/admin/delete
export const deleteUser = async (req, res) => {
  const { id: id } = req.params;
  console.log(req.params);
  if (!Mongoose.Types.ObjectId.isValid(id))
    res.status(404).send("No is User found");
  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: error });
  }
};
