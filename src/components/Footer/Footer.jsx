import React from "react";
import classes from "./Footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className={classes.footer__logo}>
        TEMZYCODES
      </a>

      <ul className={classes.permalinks}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={classes.footer__socials}>
        <a
          href="https://web.facebook.com/akinyemi.temiyeolamilekan.9/"
          rel="noreferrer"
          target="_blank"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/temzycodes/"
          rel="noreferrer"
          target="_blank"
        >
          <FiInstagram />
        </a>
        <a href="https://twitter.com/ATemiye" rel="noreferrer" target="_blank">
          <IoLogoTwitter />
        </a>
      </div>

      <div className={classes.footer__copyright}>
        <small>&copy; Temzycodes. Inspired By Egator Tutorials.</small>
      </div>
    </footer>
  );
};

export default Footer;
