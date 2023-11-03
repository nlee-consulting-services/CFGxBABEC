import { getTeachers } from "../services/teachers.js";

async function get(req, res, next) {
  try {
    const rows = await getTeachers(req.body);
    res.json(rows);
  } catch (err) {
    console.error(`Error while getting teachers`, err.message);
    next(err);
  }
}

export { get };
