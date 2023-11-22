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

function EntryForm() {
  const [entry, setEntry] = useState({});
  const [orders, setOrders] = useState([]);
  const [orgs, setOrgs] = useState([]);
  useEffect(() => {
    axios({ method: "get", url: orderEndpoint }).then((res) => {
      console.log(res.data);
      setOrders(res.data);
    });
  }, []);
  useEffect(() => {
    axios({ method: "get", url: orgEndpoint }).then((res) => {
      console.log(res.data);
      setOrgs(res.data);
    });
  }, []);
  // const orderList = axios.get()
  // const teacherList = axios.get()
  return (
    <div class="wrapper">
      <Navbar />
      <div class="entryform-wrapper">
        <h1>Entry Form</h1>
        <form action="/action_page.php">
          <div class="student-data">
            <h2>Student Data</h2>
            <label htmlFor="initials">Initials(e.g. John Doe → JD):</label>
            <br />
            <input type="text" id="initials" name="initials" />
            <br />
            <label htmlFor="lname">Teacher Last name:</label>
            <br />
            <input type="text" id="tlname" name="tlname" />
            <br />
            <label htmlFor="orgname">Organization name:</label> <br />
            <select name="orgname" id="orgname">
              {orgs &&
                orgs.map((v) => {
                  return <option key={v.org_id}>{v.org_name}</option>;
                })}
            </select>
            <br />
          </div>
          <br />
          <br />

          <div class="record">
            <h2>Insect information</h2>
            <label htmlFor="ordername">Order name:</label> <br />
            <select name="ordername" id="ordername">
              {orders &&
                orders.map((v) => {
                  return <option key={v.order_id}>{v.order_name}</option>;
                })}
            </select>
            <br />
            <label htmlFor="commonname">Common name:</label>
            <br />
            <input type="text" id="commonname" name="commonname" />
            <br />
            <label htmlFor="insect-description">Insect description:</label>
            <br />
            <input
              type="text"
              id="insect-description"
              name="insect-description"
            />
            <br />
            <label htmlFor="date-of-collection">Date of Collection:</label>
            <br />
            <input
              type="date"
              id="date-of-collection"
              name="date-of-collection"
            />
            <br />
            <label htmlFor="habitat-description">Habitat description:</label>
            <br />
            <input
              type="text"
              id="habitat-description"
              name="habitat-description"
            />
            <br />
            <label htmlFor="presence-of-wolbachia">
              Presence of Wolbachia:
            </label>{" "}
            <br />
            <select name="presence-of-wolbachia" id="presence-of-wolbachia">
              <option>Yes</option>
              <option>No</option>
              <option>Inconclusive</option>
            </select>
            <br />
            <label htmlFor="confidence-levek">Confidence level:</label> <br />
            <select name="presence-of-wolbachia" id="presence-of-wolbachia">
              <option>High</option>
              <option>Low</option>
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

          <div class="location">
            <h2>Location</h2>

            <label htmlFor="Longitude">Longitude:</label>
            <br />
            <input type="text" id="Longitude" name="Longitude" />
            <br />
            <label htmlFor="Latitude">Latitude:</label>
            <br />
            <input type="text" id="Latitude" name="Latitude" />
            <br />
          </div>

          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <Footer />
    </div>
  );
}
export default EntryForm;
