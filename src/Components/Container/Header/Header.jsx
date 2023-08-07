import React from "react";
import "./HeaderStyle.css";

const Header = () => {
    return (
        <header className="header">
            <div className="header__block_left">
                <img
                    className="header__img"
                    src="\images\header-img.JPG"
                    alt=""
                />
            </div>
            <div className="header__block_right">
                <h2 className="main__h2" id="about-me">
                    Обо мне
                </h2>
                <p className="header__p">
                    Меня зовут Мусулманкул, мне 17 лет. Я живу в городе Бишкек,
                    Кыргызстан.
                </p>
            </div>
        </header>
    );
};

export default Header;
