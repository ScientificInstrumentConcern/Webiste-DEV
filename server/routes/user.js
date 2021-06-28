import express from "express";
import {
  authUser,
  createUser,
  getUsers,
  deleteUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/login", authUser);
router.post("/register", createUser);
router.post("/:id", deleteUser);

export { router as userRouter };
