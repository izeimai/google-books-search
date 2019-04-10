import React from "react";
import Jumbotron from "../Jumbotron";
import './style.css';

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" id="homeLink" href="/">
          Google Books Search
      </a>
        <div className="nav-item">
          <a className="nav-link active" id="searchLink" href="/">Search Books</a>
        </div>
        <div className="nav-item">
          <a className="nav-link" id="savedLink" href="/saved">Saved Books</a>
        </div>
      </nav>
      <Jumbotron />
    </div>
  );
}

export default Nav;
