import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav-items">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/projects" className="nav-link">
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
