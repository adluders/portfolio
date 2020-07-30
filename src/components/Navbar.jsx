import React from "react";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Navbar = () => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.pageYOffset > 50 ? setNavBg(true) : setNavBg(false)
    );
  }, []);

  return (
    <nav className={navBg ? "active-nav" : undefined}>
      <div className="container">
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
      </div>
    </nav>
  );
};

export default Navbar;
