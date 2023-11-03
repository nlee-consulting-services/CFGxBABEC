import pkg from "pg";
const { Client } = pkg;
import { clientInitializer } from "../utils/clientInitializer.js";

const client = new Client(clientInitializer);

await client.connect();

async function getStudents() {
  const res = await client.query("SELECT * FROM STUDENT");
  return res.rows;
}

export { getStudents };
