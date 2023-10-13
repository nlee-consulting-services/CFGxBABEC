import React from 'react';
import { Link } from "react-router-dom";
import"./footer.css";

const footer = () => {    
    return (
        <footer>
            <div class='row'>
                <ul>
                    {/*please fix the design its ugly :( -alex*/}
                    <img className = "footerlogo" src="./babec_logo_bw.png"/>
                    <img className = "footerlogo" src="./CFGLogoClear.png"/>
                    <li>
                        <strong>Links:</strong>
                    </li>
                    <li>
                        <a href="https://babec.org/what-we-do/">About BABEC</a>
                    </li>
                    <li>
                        <a href="mailto:babec@babec.org">babec@babec.org</a>
                    </li>
                    <li>
                        <a href="https://codeforgoodberkeley.github.io/">About CFG</a>
                    </li>
                    <li>
                        <a href="mailto:codeforgoodberkeley@gmail.com">codeforgoodberkeley@gmail.com</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};
export default footer;