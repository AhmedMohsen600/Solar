import React from "react";
import { Hero, Benefits } from "../components";

export function BenefitsContainer() {
  return (
    <Benefits gap="80px" flexDirection="column">
      <Hero.TitleGroup>
        <Benefits.Title self="center" maxWidth="280px">
          How Solar <Benefits.TextColor> Save</Benefits.TextColor>
          <Hero.Line />
        </Benefits.Title>
        <Benefits.Title>
          Your <Benefits.TextColor>Consumption</Benefits.TextColor>
          <Hero.Line />
        </Benefits.Title>
      </Hero.TitleGroup>
      <Benefits.Group>
        <Benefits.BigCircle>
          <Benefits.Desc maxWidth="147px">
            Save your
            <Benefits.TextColor> electricity </Benefits.TextColor>
            usage
          </Benefits.Desc>
          <Benefits.SmallCricle>1</Benefits.SmallCricle>
        </Benefits.BigCircle>
        <Benefits.BigCircle>
          <Benefits.Desc>
            Save your <br /> use of
            <Benefits.TextColor> natural gas </Benefits.TextColor>
          </Benefits.Desc>
          <Benefits.SmallCricle>2</Benefits.SmallCricle>
        </Benefits.BigCircle>
        <Benefits.BigCircle>
          <Benefits.Desc maxWidth="140px">
            <Benefits.TextColor>Clean</Benefits.TextColor> & <br />
            <Benefits.TextColor>non-polluting </Benefits.TextColor>
            to <br /> the environment
          </Benefits.Desc>
          <Benefits.SmallCricle>3</Benefits.SmallCricle>
        </Benefits.BigCircle>
        <Benefits.BigCircle>
          <Benefits.Desc maxWidth="150px">
            <Benefits.TextColor>Renewable </Benefits.TextColor> due to its
            dependence on the sun
          </Benefits.Desc>
          <Benefits.SmallCricle>4</Benefits.SmallCricle>
        </Benefits.BigCircle>
        <Benefits.BigCircle>
          <Benefits.Desc>
            <Benefits.TextColor> Low </Benefits.TextColor>
            operating & maintenance
            <Benefits.TextColor> costs</Benefits.TextColor>
          </Benefits.Desc>
          <Benefits.SmallCricle>5</Benefits.SmallCricle>
        </Benefits.BigCircle>
      </Benefits.Group>
    </Benefits>
  );
}
