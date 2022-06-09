import React, { useState } from "react";
import { HeaderAcademyContainer } from "../containers/header-academy";
import { Hero, Modal, OurProgrames } from "../components";
import dataObjc from "../data/courses-data.json";
import { useLocation } from "react-router-dom";
export default function CourseDetails() {
  const [portal, setPortal] = useState(false);
  const [data, setData] = useState(null);

  function closeModal(e) {
    if (e.target.classList.contains("modal")) setPortal(false);
  }
  const { pathname } = useLocation();
  const courseName = pathname.split("/")[2];
  const courseObject = dataObjc.find((course) => course.name === courseName);

  const renderTitle = () => {
    return (
      <Modal.TitleHolder>
        <Hero.TitleGroup>
          <Hero.Title maxWidth="385px" color="#474747">
            {courseObject.name} <Hero.Line />
          </Hero.Title>
        </Hero.TitleGroup>
        <Modal.RequestWork
          bgColor="var(--secondry-color)"
          target="_blank"
          href="https://forms.gle/uDQqwLgC8a6X1Qaz6"
        >
          Request Free Workshop
        </Modal.RequestWork>
      </Modal.TitleHolder>
    );
  };

  return (
    <>
      <HeaderAcademyContainer />
      <Modal.OverLay
        setPortal={setPortal}
        onClick={(e) => closeModal(e)}
        portal={portal}
        data={data}
      />
      {portal ? <Modal.LockBody /> : null}
      <Modal>
        {renderTitle()}
        <Modal.CoursesHolder>
          {courseObject.courses.map((course) => (
            <Modal.CourseCard
              src={course.src}
              onClick={() => {
                setPortal(true);
                setData(course);
              }}
              key={course.name}
            >
              <OurProgrames.Frame>
                <OurProgrames.CourseName>{course.name}</OurProgrames.CourseName>
              </OurProgrames.Frame>
            </Modal.CourseCard>
          ))}
        </Modal.CoursesHolder>
      </Modal>
    </>
  );
}
