// TODO: route requests

// sample below
import express from "express";
const router = express.Router();
const recordsController = require("../controllers/records.controller.js");

/* GET */
router.get("/", recordsController.get);

// /* POST */
// router.post("/", programmingLanguagesController.create);

// /* PUT */
// router.put("/:id", programmingLanguagesController.update);

// /* DELETE programming language */
// router.delete("/:id", programmingLanguagesController.remove);

module.exports = router;
