import React from "react";
import CustomButton from "./UI/CustomButton";
// import Profile from "../profile.jpg";
import Illustration from "../illustration.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-mssg">
        <p>
          Hi!{" "}
          <span role="img" aria-label="image">
            &#9995;
          </span>
        </p>
        <h1>I'm Adler Luders</h1>
        <p>Front End Web Developer</p>
        <div className="hero-mssg__media">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/just_a_devguy"
          >
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/adluders"
          >
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/adler-luders-b55b209b/"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </div>
      </div>

      <div className="hero-profile">
        <img src={Illustration} alt="User Profile" />
      </div>

      <div className="hero-cta">
        <CustomButton
          customClass="btn-main"
          text={"view my work"}
          icon={<ion-icon name="arrow-forward-outline"></ion-icon>}
        />
      </div>
    </div>
  );
};

export default Hero;
