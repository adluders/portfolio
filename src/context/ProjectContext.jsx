import React, { createContext, useState } from "react";
import htmlLogo from "../logo-html5.svg";
import cssLogo from "../logo-css3.svg";
import jsLogo from "../logo-javascript.svg";
import reactLogo from "../logo-react.svg";
import sassLogo from "../logo-sass.svg";
import bookmarkPage from "../bookmarkPreview.png";
import countryPage from "../restPreview.png";
import rps from "../projectpreview.png";

export const ProjectContext = createContext();

const ProjectContextProvider = ({ children }) => {
  const [projects] = useState([
    {
      id: 1,
      name: "Rock Paper Scissors",
      project_description:
        "This app allows a user to play a full rock paper scissors game against the cpu",
      github_url: "https://github.com/adluders/rock-paper-scissors",
      demo_url: "https://adler-rps-game.netlify.app/",
      isFeatured: true,
      stackUsed: [htmlLogo, cssLogo, jsLogo],
      projectPreview: rps,
    },
    {
      id: 2,
      name: "Countries REST API",
      project_description:
        "Rest API Project allowing giving user details of over 200 countries ",
      github_url: "https://github.com/adluders/countries-api",
      demo_url: "https://adler-country-rest-api.netlify.app/",
      isFeatured: true,
      stackUsed: [reactLogo, cssLogo],
      projectPreview: countryPage,
    },
    {
      id: 3,
      name: "Bookmark Landing Page",
      project_description:
        "Landing page built for fictitious Bookmark Manager company",
      github_url: "https://github.com/adluders/bookmark-page",
      demo_url: "https://adler-bookmark-landing-page.netlify.app/",
      isFeatured: false,
      stackUsed: [htmlLogo, sassLogo, jsLogo],
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
