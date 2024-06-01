import "./HomePage.css";
import Navbar from "../navbar.js";
import Footer from "../footer.js";
import {Link, useNavigate} from "react-router-dom";

import React, { useState } from "react";

function HomePage() {
  const navigate = useNavigate();
  const [isHovered, setHovered] = useState(true);

  const openInNewTab = (url) => {
    window.open(url, '_blank');
  };
  
  const handleContactClick = () => {
    openInNewTab("https://babec.org/contact");
  };

  const handleLabClick = () => {
    openInNewTab("https://babec.org/curricula");
  };

  const handleInsectClick = () => {
    openInNewTab("https://wolbachia.babec.org/entryform");
  };
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
                <Link onClick={handleContactClick} class="babec-link">
                <img src="./website.png"
                     onClick={handleContactClick}
                />
                <p>
                  Contact BABEC at their website to learn more and become a
                  partner school!
                </p>
                </Link>
              </div>
              <div className="lab">
                <Link onClick={handleLabClick} class="babec-link">
                <img src="./lab.png"
                     onClick={handleLabClick}
                />
                <p>
                  {" "}
                  BABEC has many different biotechnology lessons being used by
                  150+ partner schools around the USA.
                </p>
                </Link>
              </div>
              <div className="form">
                <Link onClick={handleInsectClick} class="babec-link">
                <img src="./form.png"
                     onClick={handleInsectClick}
                />
                <p>
                  Submit your very own insect data by filling out this short
                  form
                </p>
                </Link>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}
export default HomePage;
