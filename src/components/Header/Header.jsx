import React from "react";
import CTA from "./CTA";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header id="home">
      <div className={`container ${classes.header__container}`}>
        <h5>Hello I'm</h5>
        <h1>Akinyemi Temiye</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA className={classes.cta} />
        <HeaderSocials className={classes.header__socials} />
        <a href="#contact" className={classes.scroll__down}>
          Scroll Down
        </a>
        <div className={classes.me}>
          <img
            src={ME}
            alt="me"
            style={{
              width: "350px",
              height: "400px",
              margin: "auto",
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
