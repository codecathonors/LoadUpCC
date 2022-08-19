import React from "react";
import { NavLink } from "react-router-dom";

function Header( ) {

    return (
        <>
            <nav className="nav">
                <NavLink to="/" className="site-title">LoadUp! Pet Sitter</NavLink>
                <ul>
                    <li><NavLink exact to="/">Make a Booking</NavLink></li>
                    <li><NavLink to="/bookings">All Bookings</NavLink></li>
                </ul>
            </nav>
        </>
    )
}

export default Header;