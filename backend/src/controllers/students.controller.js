import { createStudent, getStudents } from "../services.js";

async function get(req, res, next) {
  try {
    const rows = await getStudents(req.body);
    res.json(rows);
  } catch (err) {
    console.error(`Error while getting students`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const row = await createStudent(req.body);
    res.json(row);
  } catch (err) {
    console.error("Error while creating student", err.message);
    next(err);
  }
}

export { get, create };
