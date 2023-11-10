import { getOrgs } from "../services.js";

async function get(req, res, next) {
  try {
    const rows = await getOrgs();
    res.json(rows);
  } catch (err) {
    console.error(`Error while getting orgs`, err.message);
    next(err);
  }
}

export { get };
