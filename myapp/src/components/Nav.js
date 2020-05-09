import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return (
      <header>
        <div className="container">
            <Link id="logo" >Michael Bowman</Link>
        </div>
        <nav>
          <Link to="/">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/portfolio">Portfolio</Link>
        </nav>
      </header>
    )
};

export default Nav;