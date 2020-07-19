import React from "react";

const Card = () => {
  return (
    <div className="Card">
      <div className="Card__Header">
        <h2>Porject Name</h2>
        <p>Last Updated</p>
      </div>
      <div className="Card__Body">
        <div className="Card__Description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio,
            iste.
          </p>
        </div>
        <div className="Card__Graphic"></div>
      </div>
      <div className="Card__Footer">
        <button>Github</button>
        <button>Live Site</button>
      </div>
    </div>
  );
};

export default Card;
