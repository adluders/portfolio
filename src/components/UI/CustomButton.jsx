import React from "react";
import PropTypes from "prop-types";

const CustomButton = ({ text, icon }) => {
  return (
    <button className="btn">
      {text} {icon}
    </button>
  );
};

CustomButton.propTypes = { text: PropTypes.string.isRequired };

CustomButton.defaultProps = { icon: null };

export default CustomButton;
