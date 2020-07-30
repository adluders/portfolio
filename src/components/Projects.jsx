import React from "react";
// import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";
import { useContext } from "react";
import { ProjectContext } from "../context/ProjectContext";
import { motion } from "framer-motion";

const Projects = () => {
  const variants = {
    start: { opacity: 0 },
    final: { opacity: 1 },
  };

  const { projects } = useContext(ProjectContext);

  return (
    <motion.div
      className="projects"
      variants={variants}
      initial="start"
      animate="final"
      transition={{ duration: 2 }}
    >
      <h1>My Work</h1>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </motion.div>
  );
};

export default Projects;
