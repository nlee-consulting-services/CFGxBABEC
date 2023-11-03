async function get(req, res, next) {
  try {
    console.log("routed to orgs");
    // const rows = await getRecords(req.body);
    // res.json(rows);
  } catch (err) {
    console.error(`Error while getting orgs`, err.message);
    next(err);
  }
}

export { get };
