import React from "react";
import classes from "./Services.module.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className={`container ${classes.services__container}`}>
        <article className={classes.service}>
          <div className={classes.service__head}>
            <h3>UI/UX Design</h3>
          </div>

          <ul className={classes.service__list}>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className={classes.service}>
          <div className={classes.service__head}>
            <h3>Web Development</h3>
          </div>

          <ul className={classes.service__list}>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className={classes.service}>
          <div className={classes.service__head}>
            <h3>Content Creation</h3>
          </div>

          <ul className={classes.service__list}>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className={classes["service__list-icon"]} />
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          </ul>
        </article>

        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
