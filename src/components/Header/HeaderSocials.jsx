import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub, FaTwitter } from "react-icons/fa";

const HeaderSocials = (props) => {
  return (
    <div className={props.className}>
      <a href="https://linkedin.com" rel="noreferrer" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com" rel="noreferrer" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com" rel="noreferrer" target="_blank">
        <FaTwitter />
      </a>
    </div>
  );
};

export default HeaderSocials;
