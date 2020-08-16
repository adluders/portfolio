import React from "react";
import { Link } from "react-router-dom";

import IconBar from "../UI/IconBar";

const MobileNav = ({ closeNav }) => {
  return (
    <nav className="mobile-nav">
      <div className="mobile-nav__toggler">
        <button className="mobile-nav__close" onClick={closeNav}>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
      <ul className="mobile-nav__items">
        <li className="mobile-nav__item">
          <Link to="/" className="mobile-nav__link">
            Home
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link to="/projects" className="mobile-nav__link">
            Portfolio
          </Link>
        </li>
        <li className="mobile-nav__item">
          <Link to="/contact" className="mobile-nav__link">
            Contact
          </Link>
        </li>
      </ul>
      <IconBar />
    </nav>
  );
};

export default MobileNav;
