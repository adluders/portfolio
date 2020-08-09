import React from "react";
import "./css/App.css";
import { Route, Switch } from "react-router-dom";

import ProjectContext from "./context/ProjectContext";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/UI/Footer";

const App = () => {
  return (
    <ProjectContext>
      {/*isMobile ? <MobileNav /> : <Navbar />*/}

      <div className="">
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
/**
 * Hero
 * Nav
 * Routes
 * Footer
 */

export default App;
