import React from "react";
import classes from "./About.module.css";
import ME from "../../assets/me_about.webp";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className={`container ${classes.about__container}`}>
        <div className={classes.about__me}>
          <div className={classes["about__me-image"]}>
            <img src={ME} alt="About img" />
          </div>
        </div>

        <div className={classes.about__content}>
          <div className={classes.about__cards}>
            <article className={classes.about__card}>
              <FaAward className={classes.about__icon} />
              <h5>Experience</h5>
              <small>3+ Years Experience</small>
            </article>

            <article className={classes.about__card}>
              <FiUsers className={classes.about__icon} />
              <h5>Clients</h5>
              <small>200+ World Wide</small>
            </article>

            <article className={classes.about__card}>
              <VscFolderLibrary className={classes.about__icon} />
              <h5>Experience</h5>
              <small>80+ Completed</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
            enim optio ab ex suscipit. Eligendi sequi exercitationem quidem
            blanditiis itaque dolore cumque nostrum ipsa minima labore. Cum
            obcaecati fugiat dolore?
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
