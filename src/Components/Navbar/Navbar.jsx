import React, { useRef } from 'react';
import './NavBar.css';
import { FiAlignJustify } from "react-icons/fi";

export default function Navbar() {
    const checkboxRef = useRef(null);

    const handleNavClick = () => {
        if (checkboxRef.current) {
            checkboxRef.current.checked = false;
        }
    };

    return (
        <>
            <nav>
                <div>
                    <h3>Mohulnath <span className='log'> ♦︎</span> </h3>
                </div>

                <input ref={checkboxRef} className='inputtt' type="checkbox" id="click" />
                <label htmlFor="click">
                    <FiAlignJustify id='bas' />
                </label>

                <div className="Basnav">
                    <a href="#home" onClick={handleNavClick}>Home</a> <span>|</span>
                    <a href="#about" onClick={handleNavClick}>About</a>  <span>|</span>
                    <a href="#skill" onClick={handleNavClick}>Skills</a>  <span>|</span>
                    <a href="#project" onClick={handleNavClick}>Projects</a>  <span>|</span>
                    <a href="#contact" onClick={handleNavClick}>Contact</a>  <span>|</span>
                </div>
            </nav>
        </>
    );
}
