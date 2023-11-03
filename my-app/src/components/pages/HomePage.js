import "./HomePage.css";
import Navbar from "../navbar.js";
import Footer from "../footer.js";
import { Link } from "react-router-dom";


function HomePage(){
    return (
        <div className='wrapper'>
            <Navbar />
            <div className="contentwrapper">
                <img className = "hero" src= "./heroimg.png"/>
                <div className = "map">
                    <img src = "./map.jpeg"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default HomePage;