import React from "react";
import { SmcGroup, Slider, Hero, OurWork } from "../components";
import sliderHome from "../fixtures/slider-home.json";

export function OurWorkContainer() {
  return (
    <OurWork>
      <Slider>
        {sliderHome.map(({ src }) => (
          <OurWork.ImageHolder key={src} src={src} />
        ))}
      </Slider>
      <SmcGroup.InfoHolder width="38.4%">
        <SmcGroup.Title isLong="200px" mobWidth="200px" maxWidth="330px">
          From our work
          <Hero.Line />
        </SmcGroup.Title>
        <Hero.Desc maxWidth="600px">
          Here is some of our works in installing a solar power plant
        </Hero.Desc>
      </SmcGroup.InfoHolder>
    </OurWork>
  );
}
