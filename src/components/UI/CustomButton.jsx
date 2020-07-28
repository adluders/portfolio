import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const button = {
  rest: { scale: 1 },
  pressed: { scale: 0.95, transition: { duration: 0.4 } },
};

const CustomButton = ({ text, icon, customClass }) => {
  return (
    <motion.button
      className={`btn ${customClass}`}
      variants={button}
      initial="rest"
      whileTap="pressed"
    >
      {text} {icon}
    </motion.button>
  );
};

CustomButton.propTypes = { text: PropTypes.string.isRequired };

CustomButton.defaultProps = { icon: null };

export default CustomButton;
