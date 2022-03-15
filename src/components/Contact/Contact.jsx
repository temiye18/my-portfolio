import React from "react";
import classes from "./Contact.module.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={`container ${classes.contact__container}`}>
        <div className={classes.contact__options}>
          <article className={classes.contact__option}>
            <MdOutlineEmail className={classes["contact__option-icon"]} />
            <h4>Email</h4>
            <h5>temiconsults@gmail.com</h5>
            <a
              href="mailto:akinyemitemiye18@gmail.com"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className={classes.contact__option}>
            <BsLinkedin className={classes["contact__option-icon"]} />
            <h4>LinkedIn</h4>
            <h5>Akinyemi Temiye</h5>

            <a href="https://linkedin.com" rel="noreferrer" target="_blank">
              Send a message
            </a>
          </article>
          <article className={classes.contact__option}>
            <BsWhatsapp className={classes["contact__option-icon"]} />
            <h4>WhatsApp</h4>
            <h5>+2349064617924</h5>
            <a
              href="https://api.whatsapp.com/send?phone=+2349064617924"
              rel="noreferrer"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}

        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
