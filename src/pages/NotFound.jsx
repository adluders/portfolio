import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import TopNav from "../components/UI/TopNav";
import Navbar from "../components/UI/Navbar";

const NotFound = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWidth = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div>
      {windowWidth <= 768 ? <TopNav /> : <Navbar />}
      <h1>Page Not Found</h1>
    </div>
  );
};

export default withRouter(NotFound);
