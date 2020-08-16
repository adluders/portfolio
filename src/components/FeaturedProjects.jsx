import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProjectItem from "./UI/ProjectItem";
import { ProjectContext } from "../context/ProjectContext";

const FeaturedProjects = () => {
  const { projects } = useContext(ProjectContext);

  return (
    <div className="container" id="featured_projects">
      {projects.map(
        (project) =>
          project.isFeatured && (
            <ProjectItem key={project.id} project={project} />
          )
      )}

      <div className="projects-cta">
        <Link className="cta " to="/projects">
          View All Projects <ion-icon name="arrow-forward-outline"></ion-icon>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
