async function get(req, res, next) {
  try {
    console.log("routed to orders");
    // const rows = await getRecords(req.body);
    // res.json(rows);
  } catch (err) {
    console.error(`Error while getting orders`, err.message);
    next(err);
  }
}

export { get };
