import React, { useState } from "react";
import classes from "./Navbar.module.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
const Navbar = () => {
  const [isActive, setIsActive] = useState("#home");

  const homePage = () => {
    setIsActive("#home");
  };

  const aboutPage = () => {
    setIsActive("#about");
  };
  const experiencePage = () => {
    setIsActive("#experience");
  };
  const servicesPage = () => {
    setIsActive("#services");
  };

  const contactPage = () => {
    setIsActive("#contact");
  };
  return (
    <nav>
      <a
        href="#home"
        className={isActive === "#home" ? classes.active : ""}
        onClick={homePage}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={isActive === "#about" ? classes.active : ""}
        onClick={aboutPage}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={isActive === "#experience" ? classes.active : ""}
        onClick={experiencePage}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        className={isActive === "#services" ? classes.active : ""}
        onClick={servicesPage}
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={isActive === "#contact" ? classes.active : ""}
        onClick={contactPage}
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Navbar;
