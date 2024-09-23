import React, { useState } from 'react';
// import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="navbar">
                <img src="/logo.jpg" alt="" />

                <div className="hamburger" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <ul className={`menu ${isOpen ? 'open' : ''}`}>
                    <li><a href="/aboutus">About Us</a></li>
                    <li><a href="/contactus">Contact Us</a></li>
                    <li><a href="/">Home</a></li>
                </ul>

                <button className='enquiry-btn'>For Enquiry</button>
            </div>
        </>
    );
};

export default Navbar;