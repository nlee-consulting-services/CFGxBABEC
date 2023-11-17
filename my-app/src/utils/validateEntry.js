import { studentEndpoint, teacherEndpoint } from "./endpoints";

const checkValidity = async (
  entry,
  name_initial,
  teacher_last_name,
  org_id
) => {
  // check existence of org_id
  if (!org_id) {
    return false;
  }

  // check if the teacher exists in the given organization
  const teacherList = await axios({
    method: "get",
    url: teacherEndpoint,
    data: { org_id: org_id },
  });
  var teacher_id = null;
  for (var t in teacherList) {
    if (teacher_last_name === t.teacher_last_name) {
      teacher_id = t.teacher_id;
    }
  }
  if (!teacher_id) {
    return false;
  }

  // check if the given teacher exists under the given teacher
  const studentList = await axios({
    method: "get",
    url: studentEndpoint,
    data: { teacher_id: teacher_id },
  });
  var student_id = null;
  for (var s in studentList) {
    if (name_initial === s.name_initial) {
      student_id = s.student_id;
    }
  }
  if (!student_id) {
    return false;
  }
};
const addTeacher = () => {};

const addStudent = () => {};

export { checkValidity, addTeacher, addStudent };
