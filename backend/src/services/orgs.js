import pkg from "pg";
const { Client } = pkg;
import { clientInitializer } from "../utils/clientInitializer.js";

const client = new Client(clientInitializer);

await client.connect();

async function getOrgs() {
  const res = await client.query("SELECT * FROM ORGANISATION");
  return res.rows;
}

export { getOrgs };
