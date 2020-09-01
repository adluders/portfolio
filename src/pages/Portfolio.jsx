import React, { useContext, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/UI/Navbar";
import { ProjectContext } from "../context/ProjectContext";
import ProjectItem from "../components/UI/ProjectItem";
import TopNav from "../components/UI/TopNav";

const Portfolio = () => {
  const { projects } = useContext(ProjectContext);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWidth = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const variants = {
    start: { opacity: 0 },
    final: { opacity: 1 },
  };

  return (
    <motion.div
      className="portfolio"
      variants={variants}
      initial="start"
      animate="final"
      transition={{ duration: 1 }}
    >
      {windowWidth < 768 ? <TopNav /> : <Navbar />}
      <div className="container">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </motion.div>
  );
};

export default Portfolio;
