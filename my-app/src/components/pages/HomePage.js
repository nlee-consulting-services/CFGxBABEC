import "./HomePage.css";
import Navbar from "../navbar.js";
import Footer from "../footer.js";
import { Link } from "react-router-dom";


function HomePage(){
    return (
        <div class='wrapper'>
            <Navbar />
            <div className="contentwrapper">
                <div className ="hero">
                    <img id = "first" src = "./hero1.png" alt = "this picture didnt load :(" />
                    <img id = "second" src = "./hero2.png" alt = "this img failed to load sorry"/>

                </div>
                <div className="map">
                    <div className = "aboutoverlay" >
                        <h1>About the Project</h1>
                        <p>This website is a hub for the Wolbachia PCR Project run by the Bay Area Bioscience Education Committee (BABEC). This project is designed to help high school students learn laboratory skills and help track the spread of Wolbachia, a bacterial infection that affects insects’ reproductive capabilities.</p>
                    </div>
                </div>
                <div className= "engagement">
                    <div className = "involvement">
                        <h1>Get Involved</h1>
                        <p>Contact BABEC at their website to learn more and become a partner school! BABEC has many different biotechnology-related project kits that are currently being used by 150+ partner schools around the USA.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )








}
export default HomePage;