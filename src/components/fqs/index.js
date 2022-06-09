import React from "react";
import { Inner, Container, Title, Group } from "./styles/fqs";

export default function Fqs({ children }) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

Fqs.Group = function FqsGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Fqs.Title = function FqsTitle({ children }) {
  return <Title>{children}</Title>;
};
