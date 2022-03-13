import React from "react";
import CV from "../../assets/temiye.pdf";

const CTA = (props) => {
  return (
    <div className={props.className}>
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
