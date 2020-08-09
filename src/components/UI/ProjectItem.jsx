import React from "react";

const ProjectItem = ({ project }) => {
  const {
    name,
    project_description,
    github_url,
    demo_url,
    projectPreview,
    stackUsed,
  } = project;

  return (
    <div className="project-item">
      <div className="project-item__info">
        <h2 className="project-item__title">{name}</h2>
        <p className="project-item__description">{project_description}</p>
        <div className="project-item__ctas">
          <a href={github_url} className="cta">
            github
          </a>
          <a href={demo_url} className="cta">
            live demo
          </a>
        </div>
      </div>

      <div className="project-item__graphics">
        <div className="project-item__preview">
          <img src={projectPreview} alt="rps" />
        </div>
        <div className="project-item__stack">
          {stackUsed.map((stack) => (
            <img key={stack.id} src={stack.name} alt={`${stack.name} logo`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
