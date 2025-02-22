import React, { useState } from 'react';
import './navbar.css';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { TbGridDots } from 'react-icons/tb';

const Navbar = () => {
    const [active, setActive] = useState(false);

    const toggleNavbar = () => {
        setActive(!active);
    };

    return (
        <section className="navBarSection">
            <header className="header flex">
                <div className="logoDiv">
                    <a href="#" className="logo flex">
                        <h1><MdOutlineTravelExplore className="icon" />MerryMiles.</h1>
                    </a>
                </div>

                <div className={active ? "navBar activeNavbar" : "navBar"}>
                    <ul className="navLists flex">
                        <li className="navItems">
                            <a href="#" className="navLink">Home</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink">Packages</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink">About</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink">Pages</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink">News</a>
                        </li>
                        <li className="navItems">
                            <a href="#" className="navLink">Contact</a>
                        </li>
                        <button className="btn">
                            <a href="#">Book Now</a>
                        </button>
                    </ul>
                </div>

                <div onClick={toggleNavbar} className="toggleNavbar">
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
};

export default Navbar;
