import React from 'react';
import { Link } from "react-router-dom";
import"./navbar.css";

const navbar = () => {    
    return (
        <nav>
            <ul className='list'>
                <img className = "logo" src="./logo.png"/>
                <li>
                    <Link className = "item" to="/">Home</Link>
                </li>
                <li>
                    <Link className = "item" to="/about">About</Link>
                </li>
                <li>
                    <Link className = "item" to="/map">Map</Link>
                </li>
                <li>
                    <Link className = "item" to="/entryform">Entry Form</Link>
                </li>
            </ul>
        </nav>
    );
};


export default navbar;