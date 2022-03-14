import React from "react";

const PortfolioItems = ({
  portfolioData,
  className,
  imageClassName,
  ctaClassName,
}) => {
  return (
    <>
      {portfolioData.map((item) => {
        return (
          <article key={item.id} className={className}>
            <div className={imageClassName}>
              <img src={item.image} alt="" />
            </div>
            <h3>{item.title}</h3>
            <div className={ctaClassName}>
              <a
                href={item.link}
                className="btn"
                rel="noreferrer"
                target="_blank"
              >
                {item.linkTitle}
              </a>
              <a
                href={item.demoLink}
                className="btn btn-primary"
                rel="noreferrer"
                target="_blank"
              >
                {item.demoTitle}
              </a>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default PortfolioItems;
