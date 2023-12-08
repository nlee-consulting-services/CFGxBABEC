import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-logo-holder">
          <img className="babec-logo" src="./babec_logo_bw.png" />
        </div>
        <div className="footer-link-grid">
          <img className="about1" src="./info_icon.svg" />
          <a className="aboutlink1" href="https://babec.org/what-we-do/">
            About BABEC
          </a>
          <img className="email1" src="./email_icon.svg" />
          <a className="emaillink1" href="mailto:babec@babec.org">
            babec@babec.org
          </a>
        </div>
        <div className="footer-logo-holder">
          <img className="cfg-logo" src="./CFG Banner.png" />
        </div>
        <div className="footer-link-grid">
          <img className="about2" src="./info_icon.svg" />
          <a
            className="aboutlink2"
            href="https://codeforgoodberkeley.github.io/"
          >
            About CFG
          </a>
          <img className="email2" src="./email_icon.svg" />
          <a className="emaillink2" href="mailto:codeforgoodberkeley@gmail.com">
            codeforgoodberkeley@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
