import express from "express";
const teacherRouter = express.Router();
import { get } from "../controllers/teachers.controller.js";

teacherRouter.get("/", get);

export { teacherRouter };
