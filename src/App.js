import React from "react";
import "./css/App.css";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectContext from "./context/ProjectContext";
import Contact from "./pages/Contact";
import { useState } from "react";
import { useEffect } from "react";
import MobileNav from "./components/MobileNav";

const App = () => {
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    window.innerWidth < 500 && setMobile(true);
  }, []);

  return (
    <ProjectContext>
      {isMobile ? <MobileNav /> : <Navbar />}
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/projects" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </ProjectContext>
  );
};

export default App;
