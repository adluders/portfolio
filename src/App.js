import React from "react";
import "./css/App.css";
import { Route, Switch } from "react-router-dom";

import ProjectContext from "./context/ProjectContext";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <ProjectContext>
      <Navbar />
      {/*isMobile ? <MobileNav /> : <Navbar />*/}
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
