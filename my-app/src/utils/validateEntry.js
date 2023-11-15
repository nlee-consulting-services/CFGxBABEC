import { studentEndpoint, teacherEndpoint } from "./endpoints";

// stautus -1: error in entry --> user needs to fix entry
// status -2: teacher does not exist in org --> prompt if wants to add teacher
// status -3: student does not exist under teacher --> prompt if wants to add student
// status 1: no errors, ready to add to database
const checkValidity = async (
  entry,
  name_initial,
  teacher_last_name,
  org_id,
  org_name
) => {
  // check existence of org_id
  if (!org_id) {
    return { status: -1, errmsg: "Please select a valid organization" };
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
    return {
      status: -2,
      errmsg: `Teacher with last name ${teacher_last_name} does not exist under institution ${org_name}. If you are certain this is not a mistake, press the "Add Teacher" button and resubmit.`,
    };
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
    return {
      status: -3,
      errmsg: `Student with initials ${name_initial} does not exist under instructor ${teacher_last_name} at ${org_name}. If you are certain this is not a mistake, press the "Add Teacher" button and resubmit`,
    };
  }

  // check if longtitude is within range
  if (entry.location_lon < -180 || entry.location_lon > 180) {
    return { status: -1, errmsg: "Please provide a valid longitude" };
  }
  // check if latitude is within range
  if (entry.location_lat < -90 || entry.location_lat > 90) {
    return { status: -1, errmsg: "Please provide a valid latitude" };
  }
};
const addTeacher = () => {};

const addStudent = () => {};

export { checkValidity, addTeacher, addStudent };
