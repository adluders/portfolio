import React from "react";
import { Link } from "react-router-dom";

const MobileNav = () => {
  return (
    <nav className="mobile-nav">
      <button className="toggler">
        <ion-icon name="menu-outline"></ion-icon>
      </button>
      <ul className="mobile-nav__items">
        <li className="mobile-nav__item">
          <Link className="mobile-nav__link" to="/">
            Home
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link className="mobile-nav__link" to="/projects">
            Portfolio
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link className="mobile-nav__link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
