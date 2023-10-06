import React from 'react';
import { Link } from "react-router-dom";

const navbar = () => {    
    return (
        <nav>
            <ul>
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


export default navbar;