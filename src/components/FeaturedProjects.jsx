import React from "react";
import ProjectItem from "./ProjectItem";
// import CustomButton from "./UI/CustomButton";
// import { useState } from "react";
import { Link } from "react-router-dom";
// import { useEffect } from "react";
import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";

const FeaturedProjects = () => {
  const { projects } = useContext(ProjectContext);

  return (
    <div className="projects">
      {projects.map(
        (project) =>
          project.isFeatured && (
            <ProjectItem key={project.id} project={project} />
          )
      )}

      <div className="projects-cta">
        <Link className="btn btn-main" to="/projects">
          View All Projects <ion-icon name="arrow-forward-outline"></ion-icon>
        </Link>
      </div>
    </div>
  );
};

// <CustomButton
//   text={"view all projects"}
//   icon={<ion-icon name="arrow-forward-outline"></ion-icon>}
// />
export default FeaturedProjects;
