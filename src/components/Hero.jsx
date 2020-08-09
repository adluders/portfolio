import React from "react";
import Navbar from "./UI/Navbar";
import TopNav from "./UI/TopNav";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="container">
        <TopNav />
        <div className="hero">
          <h1>adler luders</h1>
          <p>frontend web developer</p>
          <Link className="cta cta-main">view my work</Link>
        </div>
      </div>
      <Navbar />
    </>
  );
};

export default Hero;
