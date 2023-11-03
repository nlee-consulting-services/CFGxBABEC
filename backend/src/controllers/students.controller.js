import { getStudents } from "../services/students.js";

async function get(req, res, next) {
  try {
    const rows = await getStudents(req.body);
    res.json(rows);
  } catch (err) {
    console.error(`Error while getting students`, err.message);
    next(err);
  }
}

export { get };
