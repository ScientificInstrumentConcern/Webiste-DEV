import express from "express";
import {
  getInstrument,
  createInstrument,
  updateInstrument,
  deleteInstrument,
  getSingleInstrument
} from "../controllers/instruments.controller.js";

const router = express.Router();

router.get("/", getInstrument);
router.get("/:id",getSingleInstrument);

router.post("/add", createInstrument);
router.put("/:id", updateInstrument);
router.delete("/:id", deleteInstrument);

export { router as instrumentRouter };