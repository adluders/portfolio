import React from "react";
import "./css/App.css";
import { Route, Switch } from "react-router-dom";

import ProjectContext from "./context/ProjectContext";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./components/UI/Footer";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <ProjectContext>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
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
