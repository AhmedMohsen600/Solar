import React from "react";
import {
  Container,
  ImageAcademy,
  Inner,
  Content,
  LottieHolder,
  Group,
} from "./styles/training-programs";
export default function TraningProgrammes({ children }) {
  return <Container id="about-us">{children}</Container>;
}

TraningProgrammes.Inner = function TraningProgrammesInner({
  children,
  ...restProps
}) {
  return <Inner {...restProps}>{children}</Inner>;
};

TraningProgrammes.ImageAcademy = function TraningProgrammesImageAcademy({
  ...restProps
}) {
  return <ImageAcademy {...restProps} />;
};

TraningProgrammes.Content = function TraningProgrammesInner({ children }) {
  return <Content id="programs">{children}</Content>;
};

TraningProgrammes.LottieHolder = function TraningProgrammesLottieHolder({
  children,
}) {
  return <LottieHolder>{children}</LottieHolder>;
};

TraningProgrammes.Group = function TraningProgrammesGroup({ children }) {
  return <Group>{children}</Group>;
};
