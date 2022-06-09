import React from "react";
import {
  Container,
  Inner,
  Group,
  Card,
  Logo,
  Image,
  Title,
  CompanyName,
  Round,
  InfoHolder,
  Description,
} from "./styles/smc-group";

export default function SmcGroup({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

SmcGroup.Group = function SmcGroupGroup({ children }) {
  return <Group>{children}</Group>;
};

SmcGroup.Card = function SmcGroupCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

SmcGroup.Logo = function SmcGroupLogo({ ...restProps }) {
  return <Logo {...restProps} />;
};

SmcGroup.Image = function SmcGroupImage({ ...restProps }) {
  return <Image {...restProps} />;
};

SmcGroup.Title = function SmcGroupTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

SmcGroup.CompanyName = function SmcGroupCompanyName({ children }) {
  return <CompanyName>{children}</CompanyName>;
};

SmcGroup.Round = function SmcGroupRound({ children }) {
  return <Round>{children}</Round>;
};

SmcGroup.InfoHolder = function SmcGroupInfoHolder({ children, ...restProps }) {
  return <InfoHolder {...restProps}>{children}</InfoHolder>;
};

SmcGroup.Description = function SmcGroupDescription({ children }) {
  return <Description>{children}</Description>;
};
