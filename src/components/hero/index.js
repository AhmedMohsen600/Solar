import React from "react";
import {
  Container,
  Group,
  TitleGroup,
  Title,
  Line,
  Desc,
  Image,
  Link,
  Inner,
  Holder,
  WorkerImage,
  ImageAcademy,
} from "./styles/hero";
export default function Hero({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
}

Hero.Group = function HeroGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Hero.ImageAcademy = function HeroImageAcademy({ ...restProps }) {
  return <ImageAcademy {...restProps} />;
};

Hero.TitleGroup = function HeroTitleGroup({ children, ...restProps }) {
  return <TitleGroup {...restProps}>{children}</TitleGroup>;
};

Hero.Title = function HeroTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Hero.Holder = function HeroHolder({ children, ...restProps }) {
  return <Holder {...restProps}>{children}</Holder>;
};

Hero.Link = function HeroLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>;
};

Hero.Desc = function HeroDesc({ children, ...restProps }) {
  return <Desc {...restProps}>{children}</Desc>;
};

Hero.Line = function HeroLine({ ...restProps }) {
  return <Line {...restProps} />;
};

Hero.Image = function HeroImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Hero.WorkerImage = function HeroWorkerImage({ ...restProps }) {
  return <WorkerImage {...restProps} />;
};
