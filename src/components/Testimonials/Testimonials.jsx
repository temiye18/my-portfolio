import React from "react";

import TestimonialItem from "./TestimonialItem";
import AVTR1 from "../../assets/avatar_1.jpg";
import AVTR2 from "../../assets/avatar_2.jpg";
import AVTR3 from "../../assets/avatar_3.jpg";
import AVTR4 from "../../assets/avatar_4.webp";

const testimonials = [
  {
    id: 1,
    image: AVTR1,
    name: "Ernest Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellat. Asperiores deleniti aut consequuntur accusantium itaque consequatur tempore nemo laborum.",
  },

  {
    id: 2,
    image: AVTR2,
    name: "John Doe",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellat. Asperiores deleniti aut consequuntur accusantium itaque consequatur tempore nemo laborum.",
  },
  {
    id: 3,
    image: AVTR3,
    name: "Felix Divine",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellat. Asperiores deleniti aut consequuntur accusantium itaque consequatur tempore nemo laborum.",
  },

  {
    id: 4,
    image: AVTR4,
    name: "Pamela Achiever",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, repellat. Asperiores deleniti aut consequuntur accusantium itaque consequatur tempore nemo laborum.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <TestimonialItem testimonials={testimonials} />
    </section>
  );
};

export default Testimonials;
