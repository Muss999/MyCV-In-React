import React from "react";
import BurgerMenu from "./BurgerMenu/BurgerMenu";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Main from "./Main/Main";

const Container = () => {
    let openBtn = document.querySelector(".navbar__btn_burger");
    let closeBtn = document.querySelector(".burger-menu__btn_close");
    let burgerMenu = document.querySelector(".burger-menu");

    openBtn.addEventListener("click", () => {
        burgerMenu.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
        burgerMenu.style.display = "none";
    });
    return (
        <div className="container">
            <BurgerMenu />
            <Navbar />
            <Header />
            <Main />
        </div>
    );
};

export default Container;
