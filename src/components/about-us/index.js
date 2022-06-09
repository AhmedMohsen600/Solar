import React from "react";
import {
  Container,
  CardsHolder,
  CardTitle,
  CardDesc,
  Card,
  Round,
} from "./styles/about-us";
export default function About({ children }) {
  return <Container>{children}</Container>;
}

About.CardsHolder = function AboutCardsHolder({ children }) {
  return <CardsHolder>{children}</CardsHolder>;
};

About.Card = function AboutCard({ children }) {
  return <Card>{children}</Card>;
};

About.CardTitle = function AboutCardTitle({ children }) {
  return <CardTitle>{children}</CardTitle>;
};

About.CardDesc = function AboutCardDesc({ children }) {
  return <CardDesc>{children}</CardDesc>;
};

About.Round = function AboutRound({ children }) {
  return <Round>{children}</Round>;
};
