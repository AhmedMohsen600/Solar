import React from "react";
import { OurServices, Hero, SmcGroup, Benefits } from "../components";

export function OurServicesContainer() {
  return (
    <OurServices>
      <OurServices.Group>
        <SmcGroup.Title maxWidth="280px">
          Our services
          <Hero.Line />
        </SmcGroup.Title>
        <Hero.Desc>
          <Benefits.TextColor>SMC</Benefits.TextColor> handels your whole solar
          journey from A-Z
        </Hero.Desc>
      </OurServices.Group>
      <OurServices.Frame />
    </OurServices>
  );
}
