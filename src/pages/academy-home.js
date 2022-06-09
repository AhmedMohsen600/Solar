import React from "react";
import { TrainingProgramsContainer } from "../containers/traning-programs";
import { OurTrainingContainer } from "../containers/our-trainings";
import { FeedbackContainer } from "../containers/feedback";
import { HeaderAcademyContainer } from "../containers/header-academy";
export default function AcademyHomePage() {
  return (
    <>
      <HeaderAcademyContainer aria-label="header-academy" />
      <TrainingProgramsContainer />
      <OurTrainingContainer />
      <FeedbackContainer />
    </>
  );
}
