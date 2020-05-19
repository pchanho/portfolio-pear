import React from 'react';
import "../css/styles.css";
import logo from "../img/Pear_logo.png";
import { NavLink } from "react-router-dom";

/* function is the opening page for the application containing a description of the app and link to account page
*/
export default function Landing() {
    return (
        <div>
            <section className="landing">
                <img src={logo} className="landing_logo" alt="logo"/>
                <h1>Welcome to Pear</h1>
                <h3>Connect with Pear</h3>
                <NavLink to="/home" className="btn">Join Now</NavLink>
                <br></br>

            </section>

            <section id="about-pear">
                <h3 className="title">About Pear</h3>
                <p id='about'>Pear let's seniors connect with another random individual and talk about the things that interest them.
                    Simply make an account then create or join a new conversation and you'll be chatting away in moments.</p>
            </section>

            <div className="bgImg" alt="bgImg"></div>
        </div>
    );
}
