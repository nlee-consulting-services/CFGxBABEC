import express from "express";
const studentRouter = express.Router();
import { get } from "../controllers/students.controller.js";

studentRouter.get("/", get);

export { studentRouter };
