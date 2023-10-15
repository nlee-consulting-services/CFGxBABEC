import express from "express";
const router = express.Router();
import { get, create } from "../controllers/records.controller.js";

router.get("/records", get);

router.post("/records", create);

export { router };
