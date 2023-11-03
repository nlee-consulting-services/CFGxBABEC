import { readFile } from "fs/promises";
const secrets = JSON.parse(
  await readFile(new URL("../../secrets.json", import.meta.url))
);

const clientInitializer = {
  host: "bubble.db.elephantsql.com",
  database: "uehjppbc",
  user: "uehjppbc",
  password: secrets.dbpw,
};

export { clientInitializer };
