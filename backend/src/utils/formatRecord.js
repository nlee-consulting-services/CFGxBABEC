const recordColumns = [
  "insect_id",
  "student_id",
  "location_lon",
  "location_lat",
  "collection_date",
  "observations",
  "dna_extraction_kit",
  "dna_extraction_location",
  "gel_rig",
  "running_buffer",
  "dna_stain",
  "gel_image",
  "protocol_notes",
  "wolbachia_presence",
  "wolbachia_16s_sequence",
  "wolbachia_16s_fasta",
  "wolbachia_16s_ab1",
  "arthropod_coi_sequence",
  "arthropod_coi_fasta",
  "arthropod_coi_ab1",
];

const formatRecord = (values) => {
  return recordColumns.map((v) => {
    return values[v] === undefined ? null : values[v];
  });
};

const getTextForGetRecord = (params) => {
  if (params) {
    const columns = Object.keys(params);
    return `SELECT * FROM RECORD WHERE ${columns
      .map((col) => {
        return `${col} = ${params[col]}`;
      })
      .join(" AND ")}`;
  } else {
    return "SELECT * FROM RECORD";
  }
};

const getTextForCreateRecord = () => {
  return `INSERT INTO RECORD VALUES($${Array.from(
    { length: recordColumns.length },
    (_, i) => i + 1
  ).join(", $")}) RETURNING *`;
};

export { formatRecord, getTextForCreateRecord, getTextForGetRecord };
