import { getTeachers } from "../services/teachers.js";

async function get(req, res, next) {
  try {
    console.log("routed to teachers");
    const rows = await getTeachers();
    res.json(rows);
  } catch (err) {
    console.error(`Error while getting teachers`, err.message);
    next(err);
  }
}

export { get };
