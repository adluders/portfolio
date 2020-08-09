import React from "react";
import IconBar from "./IconBar";

const ContactForm = () => {
  return (
    <form className="contact-form container">
      <div className="contact-form__header">
        <h3>would you like to work with me? perfect!</h3>
      </div>

      <div className="contact-form__details">
        <div className="contact-form__groups">
          <div className="contact-form__group">
            <label htmlFor="name">name</label>
            <input type="text" name="name" required placeholder="John Doe" />
          </div>

          <div className="contact-form__group">
            <label htmlFor="email">email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="email@example.com"
            />
          </div>

          <div className="contact-form__group">
            <label htmlFor="subject">subject</label>
            <input type="text" name="subject" placeholder="New Project Idea" />
          </div>

          <div className="contact-form__group">
            <label htmlFor="message">message</label>
            <textarea
              name="message"
              cols="30"
              rows="10"
              required
              placeholder="Hi, let's talk..."
            ></textarea>
          </div>

          <div className="contact-form__submit">
            <input type="submit" value="submit" className="cta" />
          </div>
        </div>

        <IconBar />
      </div>
    </form>
  );
};

export default ContactForm;
