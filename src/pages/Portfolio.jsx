import React from "react";
import Card from "../components/Card";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <div className="Portfolio__Contents Container">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="Container">
        <button>View More</button>
      </div>
    </div>
  );
};

export default Portfolio;
