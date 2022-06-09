import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CustomDots, CustomLeftArrow, CustomRightArrow } from "..";
import { SliderHolder } from "./styles/slider";
export default function Slider({ children }) {
  const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 100 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  return (
    <SliderHolder>
      <Carousel
        showDots={true}
        draggable={false}
        arrows={true}
        infinite={true}
        responsive={responsive}
        containerClass="carousel-with-custom-dots"
        customDot={<CustomDots />}
        customRightArrow={<CustomRightArrow />}
        customLeftArrow={<CustomLeftArrow />}
      >
        {children}
      </Carousel>
    </SliderHolder>
  );
}
