import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Changing from <a href> tags to <Link> following the react-router-dom documentation
function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <Link to ="/search" className="navbar-brand">
                Google Books Search</Link>
            <Link to ="/search">Search</Link>
            <Link to ="/saved">Saved</Link>
        </nav>
    );
}

export default Nav;