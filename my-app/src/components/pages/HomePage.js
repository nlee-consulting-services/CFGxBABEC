import "./HomePage.css";
import Navbar from "../navbar.js";
import Footer from "../footer.js";
import { Link } from "react-router-dom";

import React, { useState } from "react";

function HomePage() {
  const [isHovered, setHovered] = useState(true);
  return (
    <div className="wrapper">
      <div className="contentwrapper">
        <div className="hero">
          <h1>Wolbachia Tracking</h1>
          <img
            onMouseEnter={() => setHovered(false)}
            onMouseLeave={() => setHovered(true)}
            className="hero-image"
            src={isHovered ? "./icon1.png" : "./icon2.gif"}
            alt="Hero Image"
          />
        </div>
        <div className="about">
          <img className="map" src="./map1.png" />
          <div className="aboutoverlay">
            <h1>About the Project</h1>
            <p>
              This website is a hub for the Wolbachia PCR Project run by the Bay
              Area Bioscience Education Committee (BABEC). This project is
              designed to help high school students learn laboratory skills and
              help track the spread of Wolbachia, a bacterial infection that
              affects insects’ reproductive capabilities.
            </p>
          </div>
        </div>
          <div className="involvement">
            <h1>Get Involved</h1>
            <div className="flexcontainer">
              <div className="contact">
                <img src="./website.png" />
                <p>
                  Contact BABEC at their website to learn more and become a
                  partner school!
                </p>
              </div>
              <div className="lab">
                <img src="./lab.png" />
                <p>
                  {" "}
                  BABEC has many different biotechnology project currently being
                  used by 150+ partner schools around the USA.
                </p>
              </div>
              <div className="form">
                <img src="./form.png" />
                <p>
                  Submit your very own insect data by filling out this short
                  form
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
export default HomePage;
