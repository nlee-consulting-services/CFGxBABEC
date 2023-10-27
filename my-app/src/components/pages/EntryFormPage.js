import "./HomePage.css";
import Navbar from "../navbar.js";
import { Link } from "react-router-dom";


function EntryForm(){
    return (
        <div class='wrapper'>          
            <Navbar />
            <div class = "entryform-wrapper">
                <h1>Entry Form</h1>
                <form action="/action_page.php">

                    <div class = "student-data">
                        <h2>Student Data</h2>

                        <label for="initials">Initials(e.g. John Doe → JD):</label><br/>
                        <input type="text" id="initials" name="initials"/><br/>
                        <label for="lname">Teacher Last name:</label><br/>
                        <input type="text" id="tlname" name="tlname"/><br/>
                        <label for="orgname">Organization name:</label> <br/>

                        <select name="orgname" id="orgname"> 
                            <option >school1</option> 
                            <option>school2</option> 
                            <option >school3</option> 
                            <option>school4</option> 
                        </select><br/>
                    </div>
                    <br/>
                    <br/>

                    <div class = "record">
                        <h2>Insect information</h2>

                        <label for="ordername">Order name:</label> <br/>
                        <select name="ordername" id="ordername"> 
                            <option >bug1</option> 
                            <option>bug2</option> 
                            <option >bug3</option> 
                            <option>bug4</option> 
                        </select><br/>

                        <label for="commonname">Common name:</label><br/>
                        <input type="text" id="commonname" name="commonname"/><br/>
                        <label for="insect-description">Insect description:</label><br/>
                        <input type="text" id="insect-description" name="insect-description"/><br/>
                        <label for="date-of-collection">Date of Collection:</label><br/>
                        <input type="date" id="date-of-collection" name="date-of-collection"/><br/>
                        <label for="habitat-description">Habitat description:</label><br/>
                        <input type="text" id="habitat-description" name="habitat-description"/><br/>

                        <label for="presence-of-wolbachia">Presence of Wolbachia:</label> <br/>
                        <select name="presence-of-wolbachia" id="presence-of-wolbachia"> 
                            <option >Yes</option> 
                            <option>No</option> 
                            <option >Inconclusive</option> 
                        </select><br/>

                        <label for="confidence-levek">Confidence level:</label> <br/>
                        <select name="presence-of-wolbachia" id="presence-of-wolbachia"> 
                            <option >High</option> 
                            <option>Low</option> 
                        </select><br/>

                        <label for="explanantion-of-confidence-level">Explanantion of confidence level:</label><br/>
                        <input type="text" id="explanantion-of-confidence-level" name="explanantion-of-confidence-level"/><br/>
                        <label for="gel-image">Gel image (Please use JPG or PNG format):</label><br/>
                        <input type="file" id="gel-image" name="gel-image" accept="image/png, image/jpeg"/><br/>
                    </div>
                    <br/>
                    <br/>

                    <div class = "location">
                        <h2>Location</h2>

                        <label for="Longitude">Longitude:</label><br/>
                        <input type="text" id="Longitude" name="Longitude"/><br/>
                        <label for="Latitude">Latitude:</label><br/>
                        <input type="text" id="Latitude" name="Latitude"/><br/>
                    </div>

                    <br/><input type="submit" value="Submit"/>
                </form>
            </div> 
        </div>
        
    )








}
export default EntryForm;