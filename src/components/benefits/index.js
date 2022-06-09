import React from "react";
import {
  Container,
  Inner,
  Title,
  BigCircle,
  SmallCricle,
  Group,
  Desc,
  TextColor,
} from "./styles/benefits";

export default function Benefits({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
}

Benefits.Group = function BenefitsGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Benefits.Desc = function BenefitsDesc({ children, ...restProps }) {
  return <Desc {...restProps}>{children}</Desc>;
};

Benefits.TextColor = function BenefitsTextColor({ children, ...restProps }) {
  return <TextColor {...restProps}>{children}</TextColor>;
};

Benefits.Title = function BenefitsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Benefits.BigCircle = function BenefitsBigCircle({ children }) {
  return <BigCircle>{children}</BigCircle>;
};
Benefits.SmallCricle = function BenefitsSmallCricle({ children }) {
  return <SmallCricle>{children}</SmallCricle>;
};
