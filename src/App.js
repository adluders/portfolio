import React from "react";
import "./css/App.css";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectContext from "./context/ProjectContext";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <ProjectContext>
      <div className="container">
        <Navbar />
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
