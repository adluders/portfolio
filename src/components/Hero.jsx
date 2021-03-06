import React from "react";
import TopNav from "./UI/TopNav";
import HeroBg from "../hero-bg.svg";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="container">
      <TopNav />
      <div className="hero">
        <div className="hero-bg">
          <object data={HeroBg} type="image/svg+xml">
            smg bg
          </object>
        </div>
        <div className="hero-info">
          <h1>adler luders</h1>
          <p>frontend web developer</p>
          <Link
            className="cta cta-main"
            to="featured_projects"
            smooth={true}
            offset={-90}
          >
            view my work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
