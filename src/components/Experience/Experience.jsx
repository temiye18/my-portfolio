import React from "react";
import classes from "./Experience.module.css";
import { BsPatchCheckFill } from "react-icons/bs";
import FrontendExperience from "./FrontendExperience";
import BackendExperience from "./BackendExperience";

const frontEndData = [
  {
    id: 1,
    icon: <BsPatchCheckFill className={classes["experience__details-icon"]} />,
    title: "HTML",
    skill: "Experienced",
  },

  {
    id: 2,
    icon: <BsPatchCheckFill className={classes["experience__details-icon"]} />,
    title: "CSS",
    skill: "Experienced",
  },
  {
    id: 3,
    icon: <BsPatchCheckFill className={classes["experience__details-icon"]} />,
    title: "JavaScript",
    skill: "Experienced",
  },

  {
    id: 4,
    icon: <BsPatchCheckFill className={classes["experience__details-icon"]} />,
    title: "Bootstrap",
    skill: "Experienced",
  },
  {
    id: 5,
    icon: <BsPatchCheckFill className={classes["experience__details-icon"]} />,
    title: "Tailwind",
    skill: "Intermediate",
  },

  {
    id: 6,
    icon: <BsPatchCheckFill className={classes["experience__details-icon"]} />,
    title: "React",
    skill: "Experienced",
  },
];

const backEndData = [
  {
    id: 1,
    icon: <BsPatchCheckFill className={classes["experience__details-icon"]} />,
    title: "NodeJs",
    skill: "Intermediate",
  },

  {
    id: 2,
    icon: <BsPatchCheckFill className={classes["experience__details-icon"]} />,
    title: "MongoDB",
    skill: "Intermediate",
  },
  {
    id: 3,
    icon: <BsPatchCheckFill className={classes["experience__details-icon"]} />,
    title: "PHP",
    skill: "Intermediate",
  },

  {
    id: 4,
    icon: <BsPatchCheckFill className={classes["experience__details-icon"]} />,
    title: "MySQL",
    skill: "Intermediate",
  },
  {
    id: 5,
    icon: <BsPatchCheckFill className={classes["experience__details-icon"]} />,
    title: "Python",
    skill: "Beginner",
  },
];
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className={`container ${classes.experience__container}`}>
        <div className={classes.experience__frontend}>
          <h3>Frontend Development</h3>
          <div className={classes.experience__content}>
            <FrontendExperience
              className={classes.experience__details}
              frontEndData={frontEndData}
            />
          </div>
        </div>

        {/* END OF FRONT END */}

        <div className={classes.experience_backend}>
          <h3>Backend Development</h3>
          <div className={classes.experience__content}>
            <BackendExperience
              backEndData={backEndData}
              className={classes.experience__details}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
