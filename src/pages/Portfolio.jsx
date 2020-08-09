import React, { useContext } from "react";
import Navbar from "../components/UI/Navbar";
import { ProjectContext } from "../context/ProjectContext";
import ProjectItem from "../components/UI/ProjectItem";

const Portfolio = () => {
  const { projects } = useContext(ProjectContext);

  return (
    <div className="portfolio ">
      <Navbar />
      <div className="container">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
