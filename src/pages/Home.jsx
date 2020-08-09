import React from "react";

import { Link } from "react-router-dom";

import FeaturedProjects from "../components/FeaturedProjects";
import ContactForm from "../components/UI/ContactForm";

import TopNav from "../components/UI/TopNav";
import Navbar from "../components/UI/Navbar";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <TopNav />
        <div className="hero">
          <h1>adler luders</h1>
          <p>frontend web developer</p>
          <Link className="cta cta-main">view my work</Link>
        </div>
      </div>
      <Navbar />
      <FeaturedProjects />
      <ContactForm />
    </div>
  );
};

/**
   <Hero />
   <FeaturedProjects />
   <ContactForm />
        <div className="Home__Content-Icons">
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-github"></ion-icon>
        </div>
      */
export default Home;
