import React from "react";
import "./NavbarStyle.css";
const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="logo" src="\images\logo.png" alt="logo" />
            <ul className="navbar__list">
                <li className="navbar__item">
                    <a href="#">Home</a>
                </li>
                <li className="navbar__item">
                    <a href="#about-me">About me</a>
                </li>
                <li className="navbar__item">
                    <a href="#skills">Skills</a>
                </li>
                <li className="navbar__item">
                    <a href="#contact">Contact</a>
                </li>
            </ul>
            <img
                src="\images\burger-btn.png"
                alt=""
                className="navbar__btn_burger"
            />
        </nav>
    );
};

export default Navbar;
