import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/UI/Navbar";
import TopNav from "../components/UI/TopNav";
import ContactForm from "../components/UI/ContactForm";

const Contact = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWidth = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const variants = {
    start: { opacity: 0 },
    final: { opacity: 1 },
  };

  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="start"
      animate="final"
      transition={{ duration: 1 }}
    >
      {windowWidth <= 768 ? <TopNav /> : <Navbar />}

      <ContactForm />
    </motion.div>
  );
};

export default Contact;
