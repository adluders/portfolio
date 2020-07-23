import React from "react";
import CustomButton from "./UI/CustomButton";

const Hero = () => {
  return (
    <div className="hero">
      <p className="hero-mssg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio alias non
        laborum asperiores quia numquam voluptas fugit exercitationem inventore
        modi.
      </p>

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
