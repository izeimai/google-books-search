import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/search">
                Google Books Search
      </a>
            <a href="/search">Search</a>
            <a href="/">Saved</a>
        </nav>
    );
}

export default Nav;