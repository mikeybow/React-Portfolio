import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <header>

      <div className="container">
          <a href="index.html" id="logo" >Michael Bowman</a>
      </div>
      <Nav>
        <Link to="/">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/portfolio">Portfolio</Link>
      </Nav>
  </header>
    )
};

export default Nav;