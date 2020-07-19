import React from "react";
import ProjectItem from "./ProjectItem";
import CustomButton from "./UI/CustomButton";

const Projects = () => {
  return (
    <div className="projects">
      <ProjectItem />
      <ProjectItem />

      <div className="projects-cta">
        <CustomButton
          text={"view all projects"}
          icon={<ion-icon name="arrow-forward-outline"></ion-icon>}
        />
      </div>
    </div>
  );
};

export default Projects;
