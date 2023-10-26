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
                    <label for="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname"/><br/>
                    <label for="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname"/><br/>
                    <label for="lname">Teacher Last name:</label><br/>
                    <input type="text" id="tlname" name="tlname"/><br/>
                    <label for="schoolname">School name:</label> <br/>
                    <select name="schoolname" id="schoolname"> 
                        <option >school1</option> 
                        <option>school2</option> 
                        <option >school3</option> 
                        <option>school4</option> 
                    </select><br/>
                    <label for="insectname">Insect name:</label> <br/>
                    <select name="insectname" id="insectname"> 
                        <option >bug1</option> 
                        <option>bug2</option> 
                        <option >bug3</option> 
                        <option>bug4</option> 
                    </select><br/>
                    <label for="Longitude">Longitude:</label><br/>
                    <input type="text" id="Longitude" name="Longitude"/><br/>
                    <label for="Latitude">Latitude:</label><br/>
                    <input type="text" id="Latitude" name="Latitude"/><br/>
                    <br/><input type="submit" value="Submit"/>
                </form>
            </div> 
        </div>
        
    )








}
export default EntryForm;