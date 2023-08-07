import React from "react";
import "./FooterStyle.css";
const Footer = () => {
    return (
        <>
            <footer id="contact" className="footer">
                <div className="footer__block_input">
                    <form className="footer__form_input">
                        <input
                            className="footer__input"
                            type="text"
                            placeholder="Write your name"
                        />
                        <input
                            className="footer__input"
                            type="email"
                            placeholder="Write your email"
                        />
                        <input
                            className="footer__input"
                            type="text"
                            placeholder="Write your description"
                        />
                        <button className="footer__btn">
                            Отправить сообщение
                        </button>
                    </form>
                </div>
                <div className="footer__block_map">
                    <iframe
                        className="footer__map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1039.5246538925312!2d74.58672409133383!3d42.8714521815859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec8241b52669f%3A0xb8b43841ad54c50b!2zMjkg0YPQu9C40YbQsCDQotCw0LHRi9GI0LDQu9C40LXQstCwLCDQkdC40YjQutC10Lo!5e1!3m2!1sru!2skg!4v1686817361117!5m2!1sru!2skg"
                        width="400"
                        height="300"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="footer__block_contacts">
                    <ul className="footer__contact_list">
                        <li className="footer__contact_item">
                            <strong>My number: </strong> + (996) 765 125 447
                        </li>
                        <li className="footer__contact_item">
                            <strong>My email: </strong>muss_999@mail.ru
                        </li>
                        <li className="footer__contact_item">
                            <strong>My address: </strong>Табышалиева 29
                        </li>
                        <li className="footer__contact_item"></li>
                    </ul>
                </div>
            </footer>
        </>
    );
};

export default Footer;
