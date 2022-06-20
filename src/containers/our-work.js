import React from "react";
import { SmcGroup, Slider, Hero, OurWork } from "../components";
import sliderHome from "../fixtures/slider-home.json";
import { handelLazyLoadBackgroundImage } from "../helper/lazyloadBackground";
import { PLACE_HOLDER } from "../constant/routes";
export function OurWorkContainer() {
  return (
    <OurWork>
      <Slider>
        {sliderHome.map(({ src }) => {
          return (
            <OurWork.ImageHolder
              key={src}
              src={handelLazyLoadBackgroundImage(src) || PLACE_HOLDER}
            />
          );
        })}
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
