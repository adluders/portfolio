import React from "react";
import CustomButton from "./UI/CustomButton";
import { motion } from "framer-motion";

const ContactForm = () => {
  const variants = {
    start: { opacity: 0 },
    final: { opacity: 1 },
  };

  return (
    <motion.form
      className="contact-form"
      variants={variants}
      initial="start"
      animate="final"
      transition={{ duration: 2 }}
    >
      <h2>Let's Get in touch</h2>

      <div className="contact-form__group">
        <input type="text" name="name" placeholder="John Doe" />
        <label htmlFor="name">Name</label>
      </div>

      <div className="contact-form__group">
        <input type="email" name="email" placeholder="email@mail.com" />
        <label htmlFor="email">Email</label>
      </div>

      <textarea
        name="message"
        cols="72"
        rows="10"
        placeholder="Your message..."
      ></textarea>
      <label htmlFor="message"></label>

      <CustomButton
        customClass="btn-main"
        text="submit"
        icon={<ion-icon name="mail-outline"></ion-icon>}
      />
    </motion.form>
  );
};

export default ContactForm;
