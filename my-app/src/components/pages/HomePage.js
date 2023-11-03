import "./HomePage.css";
import Navbar from "../navbar.js";
import Footer from "../footer.js";
import { Link } from "react-router-dom";


function HomePage(){
    return (
        <div class='wrapper'>
            <Navbar />
            <div className="contentwrapper">
                <div className ="hero">header section
                </div>
                <div className="map">
                    <div className = "aboutoverlay" >
                        <h1>About the Project</h1>
                        <p>this is a website used to track wolbachia here is some filler text. This text is talking about what the wolbachia tracking site does and why it is omportant. More filler text to make this sectio longer talking about what wolbachia is how it is so important things liek that.  </p>
                    </div>
                </div>
                <div className= "engagement">
                    <h1>Get involved</h1>
                    <p> here is how you can get involved in wolnachia tracking. here is some text explaining how to get involved there should be a form to the right. You can look at that and see what sort of work you need to do to get involved. We need your help. </p>
                </div>
            </div>
            <Footer />
        </div>
    )








}
export default HomePage;