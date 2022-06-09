import React from "react";
import {
  Container,
  Inner,
  Frame,
  Card,
  CourseName,
  TrainingCourses,
  SliderHolder,
} from "./styles/our-programs";

export default function OurProgrames({ children }) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

OurProgrames.Frame = function OurProgrameFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

OurProgrames.Card = function OurProgrameCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

OurProgrames.CourseName = function OurProgrameCourseName({ children }) {
  return <CourseName>{children}</CourseName>;
};
OurProgrames.TrainingCourses = function OurProgrameTrainingCourses({
  children,
}) {
  return <TrainingCourses>{children}</TrainingCourses>;
};

OurProgrames.SliderHolder = function OurProgrameSliderHolder({
  children,
  ...restProps
}) {
  return <SliderHolder {...restProps}>{children}</SliderHolder>;
};
