import React from "react";

const FrontendExperience = ({ frontEndData, className }) => {
  return (
    <>
      {frontEndData.map((item) => {
        return (
          <article key={item.id} className={className}>
            {item.icon}
            <div>
              <h4>{item.title}</h4>
              <small>{item.skill}</small>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default FrontendExperience;
