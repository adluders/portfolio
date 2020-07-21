import React from "react";
import ProjectItem from "./ProjectItem";
// import CustomButton from "./UI/CustomButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const FeaturedProjects = () => {
  const projectState = [
    {
      id: 1,
      name: "Rock Paper Scissors",
      project_description:
        "This app allows a user to play a full rock paper scissors game against the cpu",
      github_url: "https://github.com/adluders/rock-paper-scissors",
      demo_url: "https://adler-rps-game.netlify.app/",
      isFeatured: true,
    },
    {
      id: 2,
      name: "Four Card Component",
      project_description: "This is a layout app ",
      github_url: "https://github.com/adluders/challenge-1",
      demo_url: "https://adler-challenge1.netlify.app/",
      isFeatured: true,
    },
    {
      id: 3,
      name: "Rock Paper Scissors",
      project_description:
        "This app allows a user to play a full rock paper scissors game against the cpu",
      github_url: "https://github.com/adluders/rock-paper-scissors",
      demo_url: "https://adler-rps-game.netlify.app/",
      isFeatured: false,
    },
  ];

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectState);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="projects">
      {projects.map(
        (project) =>
          project.isFeatured && (
            <ProjectItem key={project.id} project={project} />
          )
      )}

      <div className="projects-cta">
        <Link className="btn" to="/projects">
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
