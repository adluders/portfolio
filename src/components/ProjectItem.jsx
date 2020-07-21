import React from "react";
// import CustomButton from "./UI/CustomButton";
import projectpreview from "../projectpreview.png";
import htmlLogo from "../logo-html5.svg";
import cssLogo from "../logo-css3.svg";
import jsLogo from "../logo-javascript.svg";
import reactLogo from "../logo-react.svg";
import sassLogo from "../logo-sass.svg";

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <div className="project-item__preview">
        <img src={projectpreview} alt="project-preview" />
      </div>
      <div className="project-item__info">
        <h2> {project.name} </h2>
        <p>{project.project_description}</p>
      </div>
      <div className="project-item__stack">
        <h3>Stack used</h3>
        <div className="project-item__stack-logos">
          <img src={htmlLogo} alt="logo" />
          <img src={cssLogo} alt="logo" />
          <img src={jsLogo} alt="logo" />
          <img src={reactLogo} alt="logo" />
          <img src={sassLogo} alt="logo" />
        </div>
      </div>
      <div className="project-item__ctas">
        <a
          href={project.github_url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Github
        </a>
        <a
          href={project.demo_url}
          target="blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};
// <CustomButton
//   text={"Github"}
//   icon={<ion-icon name="logo-github"></ion-icon>}
// />
// <CustomButton text={"Live Demo"} />

export default ProjectItem;
