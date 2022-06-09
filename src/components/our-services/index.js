import React from "react";
import { Container, Frame, Group } from "./styles/our-services";

export default function OurServices({ children }) {
  return <Container>{children}</Container>;
}

OurServices.Group = function OurServicesFrame({ children }) {
  return <Group>{children}</Group>;
};

OurServices.Frame = function OurServicesFrame() {
  return <Frame />;
};
