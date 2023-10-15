// TODO: route requests

// sample below
import express from "express";
const router = express.Router();
import { get, create } from "../controllers/records.controller.js";
// const recordsController = require("../controllers/records.controller.js");

/* GET */
router.get("/records", get);

router.post("/records", create);
// router.post("/records", (req, res) => {
//   res.json({ requestBody: req.body });
// });

// /* POST */
// router.post("/", programmingLanguagesController.create);

// /* PUT */
// router.put("/:id", programmingLanguagesController.update);

// /* DELETE programming language */
// router.delete("/:id", programmingLanguagesController.remove);

export { router };
