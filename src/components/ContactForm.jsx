import React from "react";
import CustomButton from "./UI/CustomButton";

const ContactForm = () => {
  return (
    <form className="contact-form">
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
    </form>
  );
};

export default ContactForm;
