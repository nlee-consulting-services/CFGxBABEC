import "./EntryFormPage.css";
import Navbar from "../navbar.js";
import Footer from "../footer.js";
import axios from "axios";
import {
  recordEndpoint,
  orderEndpoint,
  studentEndpoint,
  teacherEndpoint,
  orgEndpoint,
} from "../../utils/endpoints.js";
import { useEffect, useState } from "react";
import { checkValidity } from "../../utils/validateEntry.js";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function EntryForm() {
  // useState declarations
  const [entry, setEntry] = useState({});
  const [orders, setOrders] = useState([]);
  const [orgs, setOrgs] = useState([]);
  const [name_initial, setNameInitial] = useState("");
  const [teacher_last_name, setTeacherLastName] = useState("");
  const [org_id, setOrgId] = useState(0);
  const [org_name, setOrgName] = useState("");
  const [loadingModal, setLoadingModal] = useState(false);
  const [errorModal, setErrorModal] = useState({ status: false, msg: "" });
  const [addTeacherModal, setAddTeacherModal] = useState({
    status: false,
    msg: "",
  });
  const [addStudentModal, setAddStudentModal] = useState({
    status: false,
    msg: "",
  });
  const [successModal, setSuccessModal] = useState({ status: false, msg: "" });

  // initial API call to get data for dropdown
  useEffect(() => {
    axios({ method: "get", url: orderEndpoint }).then((res) => {
      setOrders(res.data);
    });
  }, []);
  useEffect(() => {
    axios({ method: "get", url: orgEndpoint }).then((res) => {
      setOrgs(res.data);
    });
  }, []);

  // POST teachers
  const addTeacher = async (teacher_last_name, org_id) => {
    axios({
      method: "post",
      url: teacherEndpoint,
      data: { teacher_last_name: teacher_last_name, org_id: org_id },
    })
      .then(() => {
        setAddTeacherModal({ status: false, msg: "" });
        setSuccessModal({ status: true, msg: "Teacher successfully added!" });
        // todo: display what was added
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // POST student
  const addStudent = async (name_initial, teacher_id) => {
    axios({
      method: "post",
      url: studentEndpoint,
      data: { name_initial: name_initial, teacher_id: teacher_id },
    })
      .then(() => {
        setAddStudentModal({ status: false, msg: "" });
        setSuccessModal({
          status: true,
          msg: "Student with successfully added!",
        });
        // todo: display what was added
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // POST record
  const addRecord = async (entry) => {
    axios({ method: "post", url: recordEndpoint, data: entry })
      .then(() => {
        setSuccessModal({
          status: true,
          msg: "Your entry has been successfully added. Thank you for your submission!",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // function activated when submit button is pressed
  // validates data --> post API if valid, request action if invalid
  const handleSubmit = async (
    e,
    entry,
    name_initial,
    teacher_last_name,
    org_id,
    org_name
  ) => {
    e.preventDefault();
    setLoadingModal(true);
    const { status, errmsg, data } = await checkValidity(
      entry,
      name_initial,
      teacher_last_name,
      org_id,
      org_name
    );
    setLoadingModal(false);
    switch (status) {
      case 1:
        addRecord({ ...entry, student_id: data.student_id });
        break;
      case -1:
        setErrorModal({ status: true, msg: errmsg });
        break;
      case -2:
        setAddTeacherModal({ status: true, msg: errmsg });
        break;
      case -3:
        setAddStudentModal({ status: true, msg: errmsg, data: data });
        break;
    }
  };

  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="entryform-wrapper">
          <h1>Entry Form</h1>
          <form>
            <div className="student-data">
              <h2>Student Data</h2>
              <label htmlFor="initials">Initials(e.g. John Doe → JD):</label>
              <br />
              <input
                type="text"
                id="initials"
                name="initials"
                onChange={(e) => {
                  setNameInitial(e.target.value);
                }}
              />
              <br />
              <label htmlFor="lname">Teacher Last name:</label>
              <br />
              <input
                type="text"
                id="tlname"
                name="tlname"
                onChange={(e) => setTeacherLastName(e.target.value)}
              />
              <br />
              <label htmlFor="orgname">Organization name:</label> <br />
              <select
                name="orgname"
                id="orgname"
                onChange={(e) => {
                  e.preventDefault();
                  setOrgId(
                    e.target.options[e.target.selectedIndex].getAttribute(
                      "data-id"
                    )
                  );
                  setOrgName(e.target.options[e.target.selectedIndex].value);
                }}
              >
                <option
                  value={undefined}
                  data-id={undefined}
                  className="void-option"
                >
                  {orgs
                    ? "Please Select an Organisation..."
                    : "Loading Organisation"}
                </option>
                {orgs &&
                  orgs.map((v) => {
                    return (
                      <option
                        key={v.org_id}
                        value={v.org_name}
                        data-id={v.org_id}
                      >
                        {v.org_name}
                      </option>
                    );
                  })}
              </select>
              <br />
            </div>
            <br />
            <br />

            <div className="record">
              <h2>Insect information</h2>
              <label htmlFor="ordername">Order name:</label> <br />
              <select
                name="ordername"
                id="ordername"
                onChange={(e) => {
                  e.preventDefault();
                  setEntry({
                    ...entry,
                    order_id:
                      e.target.options[e.target.selectedIndex].getAttribute(
                        "data-id"
                      ),
                  });
                }}
              >
                <option
                  value={undefined}
                  data-id={undefined}
                  className="void-option"
                >
                  {orgs ? "Please Select an Order..." : "Loading Order"}
                </option>
                {orders &&
                  orders.map((v) => {
                    return (
                      <option
                        key={v.order_id}
                        value={v.order_name}
                        data-id={v.order_id}
                      >
                        {v.order_name}
                      </option>
                    );
                  })}
              </select>
              <br />
              <label htmlFor="commonname">Common name:</label>
              <br />
              <input
                type="text"
                id="commonname"
                name="commonname"
                onChange={(e) => {
                  e.preventDefault();
                  setEntry({ ...entry, common_name: e.target.value });
                }}
              />
              <br />
              <label htmlFor="insect-description">Insect description:</label>
              <br />
              <input
                type="text"
                id="insect-description"
                name="insect-description"
                onChange={(e) => {
                  e.preventDefault();
                  setEntry({ ...entry, insect_description: e.target.value });
                }}
              />
              <br />
              <label htmlFor="date-of-collection">Date of Collection:</label>
              <br />
              <input
                type="date"
                id="date-of-collection"
                name="date-of-collection"
                onChange={(e) => {
                  e.preventDefault();
                  setEntry({ ...entry, collection_date: e.target.value });
                }}
              />
              <br />
              <label htmlFor="habitat-description">Habitat description:</label>
              <br />
              <input
                type="text"
                id="habitat-description"
                name="habitat-description"
                onChange={(e) => {
                  e.preventDefault();
                  setEntry({ ...entry, habitat_description: e.target.value });
                }}
              />
              <br />
              <label htmlFor="presence-of-wolbachia">
                Presence of Wolbachia:
              </label>
              <br />
              <select
                name="presence-of-wolbachia"
                id="presence-of-wolbachia"
                onChange={(e) => {
                  e.preventDefault();
                  setEntry({
                    ...entry,
                    wolbachia_presence:
                      e.target.options[e.target.selectedIndex].value,
                  });
                }}
              >
                <option value={undefined} className="void-option">
                  Please select an option...
                </option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Inconclusive">Inconclusive</option>
              </select>
              <br />
              <label htmlFor="wolbachia-wsp-sequence">
                Wolbachia WSP Sequence:
              </label>
              <br />
              <input
                type="text"
                id="wolbachia-wsp-sequence"
                name="wolbachia-wsp-sequence"
                onChange={(e) => {
                  e.preventDefault();
                  setEntry({
                    ...entry,
                    wolbachia_wsp_sequence: e.target.value,
                  });
                }}
              />
              <br />
              <label htmlFor="arthropod-coi-sequence">
                Arthropod COI Sequence:
              </label>
              <br />
              <input
                type="text"
                id="arthropod-coi-sequence"
                name="arthropod-coi-sequence"
                onChange={(e) => {
                  e.preventDefault();
                  setEntry({
                    ...entry,
                    arthropod_coi_sequence: e.target.value,
                  });
                }}
              />
              <br />
              <label htmlFor="confidence-levek">Confidence level:</label> <br />
              <select
                name="presence-of-wolbachia"
                id="presence-of-wolbachia"
                onChange={(e) => {
                  e.preventDefault();
                  setEntry({
                    ...entry,
                    confidence_level:
                      e.target.options[e.target.selectedIndex].value,
                  });
                }}
              >
                <option value={undefined} className="void-option">
                  Please select an option...
                </option>
                <option value="High">High</option>
                <option value="Low">Low</option>
              </select>
              <br />
              <label htmlFor="explanantion-of-confidence-level">
                Explanantion of confidence level:
              </label>
              <br />
              <input
                type="text"
                id="explanantion-of-confidence-level"
                name="explanantion-of-confidence-level"
                onChange={(e) => {
                  e.preventDefault();
                  setEntry({
                    ...entry,
                    expl_of_confidence_level: e.target.value,
                  });
                }}
              />
              <br />
              <label htmlFor="gel-image">
                Gel image (Please use JPG or PNG format):
              </label>
              <br />
              <input
                type="file"
                id="gel-image"
                name="gel-image"
                accept="image/png, image/jpeg"
              />
              <br />
            </div>
            <br />
            <br />

            <div className="location">
              <h2>Location</h2>

              <label htmlFor="Longitude">Longitude:</label>
              <br />
              <input
                type="number"
                step="any"
                id="Longitude"
                name="Longitude"
                onChange={(e) => {
                  e.preventDefault();
                  setEntry({ ...entry, location_lon: e.target.value });
                }}
              />
              <br />
              <label htmlFor="Latitude">Latitude:</label>
              <br />
              <input
                type="number"
                step="any"
                id="Latitude"
                name="Latitude"
                onChange={(e) => {
                  e.preventDefault();
                  setEntry({ ...entry, location_lat: e.target.value });
                }}
              />
              <br />
            </div>

            <br />
            <div
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(
                  e,
                  entry,
                  name_initial,
                  teacher_last_name,
                  org_id,
                  org_name
                );
              }}
              className="submit-button"
            >
              Submit
            </div>
          </form>
        </div>
        <Footer />
      </div>
      {/* Modal 0: processing... */}
      <Modal
        show={loadingModal}
        onHide={() => {
          setLoadingModal(true);
        }}
      >
        <div className="spinner-wrapper">
          <div className="spinner-wrapper-label">Loading...</div>
          <div className="spinner-border" role="status" />
        </div>
      </Modal>
      {/* Modal 1: form entry successfully submitted */}
      <Modal
        show={successModal.status}
        onHide={(e) => {
          e.preventDefault();
          setSuccessModal({ status: false, msg: "" });
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Submission Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{successModal.msg}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              setSuccessModal({ status: false, msg: "" });
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal 2: invalid entry attempt */}
      <Modal
        show={errorModal.status}
        onHide={() => {
          setErrorModal({ status: false, msg: "" });
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Invalid Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>{errorModal.msg}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              setErrorModal({ status: false, msg: "" });
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal 3: teacher does not exist */}
      <Modal
        show={addTeacherModal.status}
        onHide={() => {
          setAddTeacherModal({ status: false, msg: "" });
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Unknown Teacher Last Name</Modal.Title>
        </Modal.Header>
        <Modal.Body>{addTeacherModal.msg}</Modal.Body>
        <Modal.Footer>
          <Button
            variant="danger"
            onClick={(e) => {
              e.preventDefault();
              addTeacher(teacher_last_name, org_id);
            }}
          >
            Add Teacher
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              setAddTeacherModal({ status: false, msg: "" });
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal 4: student does not exist */}
      <Modal
        show={addStudentModal.status}
        onHide={() => {
          setAddStudentModal({ status: false, msg: "" });
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Unknown Student Initial</Modal.Title>
        </Modal.Header>
        <Modal.Body>{addStudentModal.msg}</Modal.Body>
        <Modal.Footer>
          {/* TODO: add student function */}
          <Button
            variant="danger"
            onClick={(e) => {
              e.preventDefault();
              addStudent(name_initial, addStudentModal.data.teacher_id);
            }}
          >
            Add Student
          </Button>
          <Button
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              setAddStudentModal({ status: false, msg: "" });
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default EntryForm;
