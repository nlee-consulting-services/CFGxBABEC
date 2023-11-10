import React from 'react';
import { Link } from "react-router-dom";
import"./navbar.css";

const Navbar = () => {    
    return (
        <nav className='navbar'>
            <ul className='list'>
                <img className = "logo" src="./logo.png"/>
                <li>
                    <h1>Wolbachia Map</h1>
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/map">Map</Link>
                </li>
                <li>
                    <Link to="/entryform">Entry Form</Link>
                </li>
            </ul>
        </nav>
    );
};


export default Navbar;