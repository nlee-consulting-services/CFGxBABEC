import { getOrders } from "../services.js";

async function get(req, res, next) {
  try {
    const rows = await getOrders();
    res.json(rows);
  } catch (err) {
    console.error(`Error while getting orders`, err.message);
    next(err);
  }
}

export { get };
