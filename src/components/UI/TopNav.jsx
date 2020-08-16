import React, { useEffect, useState } from "react";
import IconBar from "./IconBar";
import MobileNav from "../Mobile/MobileNav";

const TopNav = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWidth = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const toggleNav = () => setMobileNavOpen(!mobileNavOpen);

  return (
    <div className="top-nav">
      <h1>{""}</h1>
      {windowWidth < 768 ? (
        <button className="mobile-nav__toggle" onClick={toggleNav}>
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      ) : (
        <IconBar />
      )}
      {mobileNavOpen && <MobileNav closeNav={toggleNav} />}
    </div>
  );
};

export default TopNav;
