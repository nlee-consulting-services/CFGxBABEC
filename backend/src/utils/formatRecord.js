const recordColumns = [
  "order_id",
  "student_id",
  "location_lon",
  "location_lat",
  "collection_date",
  "insect_description",
  "gel_image",
  "wolbachia_presence",
  "wolbachia_WSP_sequence",
  "arthropod_COI_sequence",
  "habitat_description",
  "confidence_level",
  "expl_of_confidence_level",
  "well_1",
  "well_2",
  "well_3",
  "well_4",
  "well_5",
  "well_6",
  "well_7",
  "well_8",
];

const formatRecord = (values) => {
  return recordColumns.map((v) => {
    return values[v] === undefined ? null : values[v];
  });
};

const joinCommand = (
  insectBool = true,
  studentBool = true,
  teacherBool = true,
  orgBool = true
) => {
  const insectJoin = insectBool ? " JOIN INSECT_ORDER USING (ORDER_ID)" : "";
  const studentJoin =
    studentBool || teacherBool || orgBool
      ? " JOIN STUDENT USING (STUDENT_ID)"
      : "";
  const teacherJoin =
    teacherBool || orgBool ? " JOIN TEACHER USING (TEACHER_ID)" : "";
  const orgJoin = orgBool ? " JOIN ORGANISATION USING (ORG_ID)" : "";
  return [insectJoin, studentJoin, teacherJoin, orgJoin].join("");
};

const getTextForGetRecord = (params) => {
  return `SELECT * FROM RECORD${joinCommand()}`;
};

const getTextForCreateRecord = () => {
  return `INSERT INTO RECORD VALUES($${Array.from(
    { length: recordColumns.length },
    (_, i) => i + 1
  ).join(", $")}) RETURNING *`;
};

export { formatRecord, getTextForCreateRecord, getTextForGetRecord };
