import React from "react";
import css from "./Header.module.css";
import logo from "./logo.jpg";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    
    return (
        <header className={css.header}>
            <img className={css.logo} src={logo} alt="logo"></img>

            <div className={css.loginBlock}>
            {props.isAuth 
                ? <div>{props.login} - <button onClick={props.logout}>Log Out</button></div>
                : <NavLink to={`/login`}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;