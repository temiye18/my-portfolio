import React from "react";
import classes from "./Portfolio.module.css";
import IMG1 from "../../assets/portfolio_1.webp";
import IMG2 from "../../assets/portfolio_2.webp";
import IMG3 from "../../assets/portfolio_3.webp";
import IMG4 from "../../assets/portfolio_4.webp";
import IMG5 from "../../assets/portfolio_5.webp";
import IMG6 from "../../assets/portfolio_6.webp";
import PortfolioItems from "./PortfolioItems";

const portfolioData = [
  {
    id: 1,
    image: IMG1,
    title: "This a portfolio item title",
    link: "https://github.com",
    linkTitle: "Github",
    demoLink: "https://github.com",
    demoTitle: "Live Demo",
  },
  {
    id: 2,
    image: IMG2,
    title: "This a portfolio item title",
    link: "https://github.com",
    linkTitle: "Github",
    demoLink: "https://github.com",
    demoTitle: "Live Demo",
  },
  {
    id: 3,
    image: IMG3,
    title: "This a portfolio item title",
    link: "https://github.com",
    linkTitle: "Github",
    demoLink: "https://github.com",
    demoTitle: "Live Demo",
  },
  {
    id: 4,
    image: IMG4,
    title: "This a portfolio item title",
    link: "https://github.com",
    linkTitle: "Github",
    demoLink: "https://github.com",
    demoTitle: "Live Demo",
  },

  {
    id: 5,
    image: IMG5,
    title: "This a portfolio item title",
    link: "https://github.com",
    linkTitle: "Github",
    demoLink: "https://github.com",
    demoTitle: "Live Demo",
  },
  {
    id: 6,
    image: IMG6,
    title: "This a portfolio item title",
    link: "https://github.com",
    linkTitle: "Github",
    demoLink: "https://github.com",
    demoTitle: "Live Demo",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className={`container ${classes.portfolio__container}`}>
        <PortfolioItems
          portfolioData={portfolioData}
          className={classes.portfolio__item}
          imageClassName={classes["portfolio__item-image"]}
          ctaClassName={classes["portfolio__item-cta"]}
        />
      </div>
    </section>
  );
};

export default Portfolio;
