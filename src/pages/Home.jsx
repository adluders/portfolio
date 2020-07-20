import React from "react";
import Hero from "../components/Hero";
import FeaturedProjects from "../components/FeaturedProjects";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <FeaturedProjects />
      <ContactForm />
    </div>
  );
};

/**
        <div className="Home__Content-Icons">
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-github"></ion-icon>
        </div>
      */
export default Home;
