import React from "react";

const IconBar = () => {
  return (
    <ul className="icons">
      <li className="icon">
        <a
          href="https://codepen.io/adluders"
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-codepen"></ion-icon>
        </a>
      </li>
      <li className="icon">
        <a
          href="https://twitter.com/just_a_devguy"
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-twitter"></ion-icon>
        </a>
      </li>
      <li className="icon">
        <a
          href="https://github.com/adluders"
          className="icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ion-icon name="logo-github"></ion-icon>
        </a>
      </li>
    </ul>
  );
};

export default IconBar;
