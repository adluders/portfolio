import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <div className="project-item__preview">
        <img src={project.projectPreview} alt="project-preview" />
      </div>
      <div className="project-item__info">
        <h2> {project.name} </h2>
        <p>{project.project_description}</p>
      </div>
      <div className="project-item__stack">
        <h3>Techs used to build project</h3>
        <div className="project-item__stack-logos">
          {project.stackUsed.map((stack) => (
            <img key={stack.id} src={stack.name} alt={stack.name} />
          ))}
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
          className="btn btn-secondary"
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectItem;
