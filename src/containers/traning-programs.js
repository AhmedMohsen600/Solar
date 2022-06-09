import React from "react";
import { Hero, TrainingPrograms } from "../components";
import { CaretCircleRight } from "phosphor-react";
import { OurProgramsContainer } from "./our-programs";

export function TrainingProgramsContainer() {
  const renderLottie = () => {
    return (
      <lottie-player
        src="https://assets2.lottiefiles.com/packages/lf20_h1qhfkkm.json"
        background="transparent"
        speed="1"
        style={{
          width: "477px",

          marginTop: "30px",
          padding: "0",
        }}
        loop
        autoplay
      />
    );
  };

  return (
    <TrainingPrograms>
      <Hero.ImageAcademy src="bg" />
      <TrainingPrograms.Inner>
        <TrainingPrograms.Group padding="60px">
          <Hero.TitleGroup>
            <Hero.Title color="var(--color-black)">
              Training programs
              <Hero.Line bg />
            </Hero.Title>
            <Hero.Title color="var(--color-black)" maxWidth="477px">
              for{" "}
              <span style={{ color: "var(--secondry-color)" }}>
                Engineering
              </span>
              <Hero.Line bg />
            </Hero.Title>
            <Hero.Title color="var(--secondry-color)" maxWidth="277px">
              Students
              <Hero.Line bg />
            </Hero.Title>
          </Hero.TitleGroup>
          <Hero.Desc maxWidth="400px">
            Providing multiple Training Programs for engineering students in
            different branches.
          </Hero.Desc>
          <Hero.Holder>
            <Hero.Link
              href="https://forms.gle/82XTg6aCGyHTorau8"
              target="_blank"
              color="true"
            >
              Register in our summer trainings
            </Hero.Link>
            <CaretCircleRight
              color="rgb(204, 204, 204)"
              fontSize="26"
              weight="regular"
            />
          </Hero.Holder>
        </TrainingPrograms.Group>
        <TrainingPrograms.LottieHolder>
          {renderLottie()}
        </TrainingPrograms.LottieHolder>
      </TrainingPrograms.Inner>
      <TrainingPrograms.Content>
        <OurProgramsContainer />
      </TrainingPrograms.Content>
    </TrainingPrograms>
  );
}
