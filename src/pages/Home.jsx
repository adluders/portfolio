import React from "react";

import FeaturedProjects from "../components/FeaturedProjects";
import ContactForm from "../components/UI/ContactForm";

import Hero from "../components/Hero";
import Navbar from "../components/UI/Navbar";
import { withRouter } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Navbar />
      <FeaturedProjects />
      <ContactForm />
    </div>
  );
};

export default withRouter(Home);
