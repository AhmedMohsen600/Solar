import React from "react";
import { Hero, SmcGroup, Slider, OurWork } from "../components";
import sliderHome from "../fixtures/slider-academy.json";
export function OurTrainingContainer() {
  return (
    <OurWork direction="row-reverse" id="gallery">
      <Slider>
        {sliderHome.map(({ src }) => (
          <OurWork.ImageHolder key={src} src={src} />
        ))}
      </Slider>
      <SmcGroup.InfoHolder width="38.4%">
        <SmcGroup.Title isLong="200px" mobWidth="200px" maxWidth="330px">
          Our trainings
          <Hero.Line />
        </SmcGroup.Title>
        <Hero.Desc maxWidth="600px">
          Here is our latest trainings sessions and workshops.
        </Hero.Desc>
      </SmcGroup.InfoHolder>
    </OurWork>
  );
}
