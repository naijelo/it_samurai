import React from "react";
import css from "./Header.module.css";
import logo from "./logo.jpg";

const Header = () => {
    return (
        <header className={css.header}>
            <img className={css.logo} src={logo} alt="logo"></img>
        </header>
    );
}

export default Header;