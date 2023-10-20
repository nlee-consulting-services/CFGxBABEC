const recordColumns = [
  "insect_name",
  "order_id",
  "student_id",
  "location_lon",
  "location_lat",
  "collection_date",
  "observations",
  "gel_image",
  "legend_well_1",
  "legend_well_2",
  "legend_well_3",
  "legend_well_4",
  "legend_well_5",
  "legend_well_6",
  "legend_well_7",
  "legend_well_8",
  "wolbachia_presence",
  "confidence_level",
  "expl_conf_level",
  "wolbachia_WSP_sequence",
  "arthropod_COI_sequence",
];

const formatRecord = (values) => {
  return recordColumns.map((v) => {
    return values[v] === undefined ? null : values[v];
  });
};

const getTextForGetRecord = (params) => {
  const columns = Object.keys(params);
  if (columns.length === 0) {
    return "SELECT * FROM RECORD";
  } else {
    return `SELECT * FROM RECORD WHERE ${columns
      .map((col) => {
        return `${col} = ${params[col]}`;
      })
      .join(" AND ")}`;
  }
};

const getTextForCreateRecord = () => {
  return `INSERT INTO RECORD VALUES($${Array.from(
    { length: recordColumns.length },
    (_, i) => i + 1
  ).join(", $")}) RETURNING *`;
};

export { formatRecord, getTextForCreateRecord, getTextForGetRecord };
