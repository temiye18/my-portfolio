import React from "react";
import classes from "./Testimonials.module.css";

// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const TestimonialItem = ({ testimonials }) => {
  return (
    <Swiper
      className={`container ${classes.testimonials__container}`}
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {testimonials.map(({ id, image, name, review }) => {
        return (
          <SwiperSlide key={id} className={classes.testimonial}>
            <div className={classes.client__avatar}>
              <img src={image} alt={name} />
            </div>
            <h5 className={classes.client__name}>{name}</h5>
            <small className={classes.client__review}>{review}</small>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default TestimonialItem;
