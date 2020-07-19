import React from "react";
import CustomButton from "./UI/CustomButton";
import project from "../project.png";

const ProjectItem = () => {
  return (
    <div className="project-item">
      <div className="project-item__preview">
        <img src={project} alt="project-preview" />
      </div>
      <div className="project-item__info">
        <h2>Project Name</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          nostrum?
        </p>
      </div>
      <div className="project-item__ctas">
        <CustomButton
          text="github"
          icon={<ion-icon name="logo-github"></ion-icon>}
        />
        <CustomButton text="live demo" />
      </div>
    </div>
  );
};

export default ProjectItem;
