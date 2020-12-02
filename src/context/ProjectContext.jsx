import React, { createContext, useState } from "react";
import htmlLogo from "../logo-html5.svg";
import cssLogo from "../logo-css3.svg";
import jsLogo from "../logo-javascript.svg";
import reactLogo from "../logo-react.svg";
import sassLogo from "../logo-sass.svg";
import framerLogo from "../logo-framer.svg";
import bookmarkPage from "../bookmarkPreview.png";
import countryPage from "../restPreview.png";
import rps from "../projectpreview.png";
import photosnap from "../photoSnap.png";
import portfolio from "../portfolio.png";

export const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
  const [projects] = useState([
    {
      id: 0,
      name: "Photosnap",
      project_description:
        "Multi-page marketing website built for a photo-sharing app",
      github_url: "https://github.com/adluders/photosnap",
      demo_url: "https://adler-photosnap.netlify.app/",
      isFeatured: true,
      stackUsed: [
        { id: 0, name: reactLogo },
        { id: 1, name: sassLogo },
      ],
      projectPreview: photosnap,
    },
    {
      id: 1,
      name: "Countries Finder",
      project_description:
        "App built to allow users to interact with over 200 countries ",
      github_url: "https://github.com/adluders/countries-api",
      demo_url: "https://adler-country-rest-api.netlify.app/",
      isFeatured: true,
      stackUsed: [
        { id: 0, name: reactLogo },
        { id: 1, name: cssLogo },
      ],
      projectPreview: countryPage,
    },
    {
      id: 2,
      name: "Rock Paper Scissors",
      project_description: "Classic Rock Paper Scissors Game! Give it a shot!",
      github_url: "https://github.com/adluders/rock-paper-scissors",
      demo_url: "https://adler-rps-game.netlify.app/",
      isFeatured: false,
      stackUsed: [
        { id: 0, name: htmlLogo },
        { id: 1, name: cssLogo },
        { id: 3, name: jsLogo },
      ],
      projectPreview: rps,
    },
    {
      id: 3,
      name: "My own Portfolio",
      project_description:
        "Portfolio page showcasing some of my favorite projects",
      github_url: "https://github.com/adluders/portfolio",
      demo_url: "https://adler-portfolio.netlify.app/",
      isFeatured: false,
      stackUsed: [
        { id: 0, name: reactLogo },
        { id: 1, name: sassLogo },
        { id: 2, name: framerLogo },
      ],
      projectPreview: portfolio,
    },
    {
      id: 4,
      name: "Bookmark Manager Landing Page",
      project_description: "Landing page layout built for a Bookmark Manager",
      github_url: "https://github.com/adluders/bookmark-page",
      demo_url: "https://adler-bookmark-landing-page.netlify.app/",
      isFeatured: false,
      stackUsed: [
        { id: 0, name: htmlLogo },
        { id: 1, name: sassLogo },
        { id: 2, name: jsLogo },
      ],
      projectPreview: bookmarkPage,
    },
  ]);
  return (
    <ProjectContext.Provider value={{ projects }}>
      {children}
    </ProjectContext.Provider>
  );
};

export default ProjectContextProvider;
