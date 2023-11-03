import { getStudents } from "../services/students.js";

async function get(req, res, next) {
  try {
    console.log("routed to students");
    const rows = await getStudents();
    res.json(rows);
  } catch (err) {
    console.error(`Error while getting students`, err.message);
    next(err);
  }
}

export { get };
