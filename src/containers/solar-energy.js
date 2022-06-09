import React from "react";
import { SmcGroup, Hero, SolarVideo, Benefits } from "../components";

export function SolarEnergyContainer() {
  return (
    <Benefits
      gap="40px"
      display="flex"
      flexDirection="row"
      mobDirc="column"
      backgroundColor="var(--color-hover)"
      alignMob="flex-start"
    >
      <SmcGroup.InfoHolder gap="8px">
        <SmcGroup.Title mobWidth="170px" maxWidth="281px">
          Solar Energy
          <Hero.Line />
        </SmcGroup.Title>
        <Hero.Desc maxWidth="390px">
          Solar energy can save you up to 100% of your electricity or natural
          gas consumption
        </Hero.Desc>
      </SmcGroup.InfoHolder>
      <SolarVideo />
    </Benefits>
  );
}
