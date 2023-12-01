import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        toggleDropdown();
        navigate('/');
    };

    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    return (
        <nav className='navbar'>
            <img 
                className="logo" 
                src="./logo.png" 
                alt="Logo" 
                onClick={handleClick}
            />
            <h1>Wolbachia Map</h1>
            <button className="dropdown-toggle" onClick={toggleDropdown}>
                ☰
            </button>
            <ul className={`list ${isDropdownVisible ? 'show' : ''}`}>
                <li><Link to="/" onClick={toggleDropdown}>Home</Link></li>
                <li><Link to="/about" onClick={toggleDropdown}>About</Link></li>
                <li><Link to="/map" onClick={toggleDropdown}>Map</Link></li>
                <li><Link to="/entryform" onClick={toggleDropdown}>Entry Form</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
