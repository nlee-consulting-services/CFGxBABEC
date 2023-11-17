import "./HomePage.css";
import Navbar from "../navbar.js";
import Footer from "../footer.js";
import { Link } from "react-router-dom";

import React, { useState } from "react";


function HomePage(){
    const [isHovered, setHovered] = useState(false);
    return (
        <div className='wrapper'>
            <Navbar />
            <div className="contentwrapper">
                <div className ="hero">
                    <img
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="hero-image"
                    src={isHovered ? './hero2.png' : './hero1.png'}
                    alt="Hero Image" />

                </div>
                <div className="about">
                    <img className = "map" src = "./map1.png"/>
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