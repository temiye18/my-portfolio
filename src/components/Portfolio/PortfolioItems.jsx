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
              <img src={item.image} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
            <div className={ctaClassName}>
              <a
                href={item.github}
                className="btn"
                rel="noreferrer"
                target="_blank"
              >
                Github
              </a>
              <a
                href={item.demo}
                className="btn btn-primary"
                rel="noreferrer"
                target="_blank"
              >
                Demo
              </a>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default PortfolioItems;
