import { getTeachers, createTeacher } from "../services.js";

async function get(req, res, next) {
  try {
    const rows = await getTeachers(req.body);
    res.json(rows);
  } catch (err) {
    console.error(`Error while getting teachers`, err.message);
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const row = await createTeacher(req.body);
    res.json(row);
  } catch (err) {
    console.log("Error while creating teacher", err.message);
    next(err);
  }
}

export { get, create };
