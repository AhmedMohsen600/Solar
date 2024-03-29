import React, { useState, useEffect } from "react";
import { OurProgrames, SmcGroup, Hero } from "../components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CategotyData from "../data/courses-data.json";
import { Link } from "react-router-dom";
import { responsive } from "../constant/responsive";
import { handelLazyLoadBackgroundImage } from "../helper/lazyloadBackground";
import { PLACE_HOLDER } from "../constant/routes";

export function OurProgramsContainer() {
  const [cursor, setCursor] = useState("grab");
  const [clientXonMouseDown, setClientXonMouseDown] = useState(null);
  const [clientYonMouseDown, setClientYonMouseDown] = useState(null);
  // add category object inside local storage
  useEffect(() => {
    console.log({ cursor });
  }, [cursor]);
  function handleOnMouseDown(e) {
    setClientXonMouseDown(e.clientX);
    setClientYonMouseDown(e.clientY);
    e.preventDefault(); // stops weird link dragging effect
  }

  function handleOnClick(e) {
    e.stopPropagation();
    if (clientXonMouseDown !== e.clientX || clientYonMouseDown !== e.clientY) {
      // prevent link click if the element was dragged
      e.preventDefault();
    }
  }

  return (
    <OurProgrames>
      <SmcGroup.Title maxWidth="540px">
        Our Programes Category
        <Hero.Line bg />
      </SmcGroup.Title>
      <OurProgrames.SliderHolder
        onMouseDown={() => setCursor("grabbing")}
        onMouseUp={() => setCursor("grab")}
        cursor={cursor}
      >
        <Carousel
          removeArrowOnDeviceType={["mobile", "tablet", "desktop"]}
          responsive={responsive}
          pauseOnHover={true}
          transitionDuration={90}
          minimumTouchDrag={20}
          autoPlay={true}
          focusOnSelect={true}
        >
          {CategotyData.map((categ) => (
            <Link
              draggable="false"
              key={categ.name}
              to={`/academy/${categ.name}`}
            >
              <OurProgrames.Card
                src={handelLazyLoadBackgroundImage(categ.src) || PLACE_HOLDER}
                onMouseDown={(e) => handleOnMouseDown(e)}
                onClick={(e) => {
                  handleOnClick(e);
                }}
              >
                <OurProgrames.Frame>
                  <OurProgrames.CourseName>
                    {categ.category}
                  </OurProgrames.CourseName>
                  <OurProgrames.TrainingCourses>
                    {categ.courses.length} Training tracks
                  </OurProgrames.TrainingCourses>
                </OurProgrames.Frame>
              </OurProgrames.Card>
            </Link>
          ))}
        </Carousel>
      </OurProgrames.SliderHolder>
    </OurProgrames>
  );
}
