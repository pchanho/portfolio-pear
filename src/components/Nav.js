import React from "react";
import { NavLink } from "react-router-dom";
import "../css/styles.css";

// Nav specifies where to nagigate for each menu
export default function Nav() {
    return (
        <div className="Nav-bar">
            <NavLink to="/" id="nav-logo-text">Pear</NavLink>
            <nav>

                <NavLink to="/">Home</NavLink>

                <NavLink to="/">About Us</NavLink>

                <NavLink to="#">Contact Us</NavLink>

                <NavLink exact to="/">Sign In</NavLink>
                {/* add in some kind of sign out */}

            </nav>
        </div>
    );
}
