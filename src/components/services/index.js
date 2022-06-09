import React from "react";
import {
  Container,
  HeaderPage,
  Card,
  Group,
  CardTitle,
  CardsHolder,
  Description,
} from "./styles/services";

export default function Services({ children }) {
  return <HeaderPage>{children}</HeaderPage>;
}

Services.Container = function ServicesContainer({ children }) {
  return <Container>{children}</Container>;
};

Services.Card = function ServicesCard({ children }) {
  return <Card>{children}</Card>;
};

Services.Group = function ServicesGroup({ children }) {
  return <Group>{children}</Group>;
};

Services.CardTitle = function ServicesCardTitle({ children }) {
  return <CardTitle>{children}</CardTitle>;
};

Services.CardsHolder = function ServicesCardsHolder({
  children,
  ...restProps
}) {
  return <CardsHolder {...restProps}>{children}</CardsHolder>;
};

Services.Description = function ServicesDescription({ children }) {
  return <Description>{children}</Description>;
};
