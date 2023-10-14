// TODO: async functions for REST API

// sample below
import { getRecords, createRecord } from "../services/index.js";
// const wolbachiaRecords = require("../services/index.js");

async function get(req, res, next) {
  try {
    res.send(getRecords);
  } catch (err) {
    console.error(`Error while getting records`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    res.json(createRecord);
  } catch (err) {
    console.error(`Error while creating record`, err.message);
    next(err);
  }
}

// async function update(req, res, next) {
//   try {
//     res.json(await programmingLanguages.update(req.params.id, req.body));
//   } catch (err) {
//     console.error(`Error while updating programming language`, err.message);
//     next(err);
//   }
// }

// async function remove(req, res, next) {
//   try {
//     res.json(await programmingLanguages.remove(req.params.id));
//   } catch (err) {
//     console.error(`Error while deleting programming language`, err.message);
//     next(err);
//   }
// }

export { get, create };
