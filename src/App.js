import React from "react";
import "./css/App.css";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Portfolio} />
      </Switch>
      <Footer />
    </div>
  );
};

// <Route exact path="/contact" component={Contact} />

export default App;
