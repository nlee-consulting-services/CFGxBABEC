import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <img className="babec-logo" src="./babec_logo_bw.png" />
        <img className="about1" />
        <a className="aboutlink1" href="https://babec.org/what-we-do/">
          About BABEC
        </a>
        <img className="cfgbanner" src="./CFG Banner.png" />
        <img className="about2" />
        <a className="aboutlink2" href="https://codeforgoodberkeley.github.io/">
          About CFG
        </a>
        <img className="email1" />
        <a className="emaillink1" href="mailto:babec@babec.org">
          babec@babec.org
        </a>
        <img className="email2" />
        <a className="emaillink2" href="mailto:codeforgoodberkeley@gmail.com">
          codeforgoodberkeley@gmail.com
        </a>
      </div>
    </footer>
  );
};
export default Footer;
