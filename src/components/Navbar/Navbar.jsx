import React from "react";
import css from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
 

const Navbar = () => {
    return (
        <nav className={css.navigation}>
            <div>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div>
                <NavLink to="/news">News</NavLink>
            </div>
            <div>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div>
                <NavLink to="/other">Other</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;