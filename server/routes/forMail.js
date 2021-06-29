import express from "express";
import {
    contactAdmin,
    enquireAdmin
} from "../controllers/forMail.controller.js";

const router = express.Router();


router.post("/contact", contactAdmin);
router.post("/enquiry", enquireAdmin);


export { router as publicRouter };