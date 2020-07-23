import React from "react";
// import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";
import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

const Projects = () => {
  const { projects } = useContext(ProjectContext);

  return (
    <div className="projects">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
