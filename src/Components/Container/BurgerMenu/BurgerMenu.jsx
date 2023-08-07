import React from "react";
import "./BurgerMenuStyle.css";
const BurgerMenu = () => {
    return (
        <div className="burger-menu">
            <div className="burger-menu__content">
                <img
                    src="\images\burger-close-btn.png"
                    alt=""
                    className="burger-menu__btn_close"
                />
                <ul className="burger-menu__list">
                    <li className="burger-menu__item">
                        <a href="#">Home</a>
                    </li>
                    <li className="burger-menu__item">
                        <a href="#about-me">About me</a>
                    </li>
                    <li className="burger-menu__item">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="burger-menu__item">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default BurgerMenu;
