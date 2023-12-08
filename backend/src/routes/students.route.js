import express from "express";
const studentRouter = express.Router();
import { get, create } from "../controllers/students.controller.js";

studentRouter.get("/", get);
studentRouter.post("/", create);

export { studentRouter };
