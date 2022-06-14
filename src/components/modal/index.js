import React, { useState } from "react";
import {
  Container,
  TitleHolder,
  CourseCard,
  CoursesHolder,
  OverLay,
  Group,
  CourseName,
  ProgrameDetails,
  Text,
  TabBtn,
  RegisterBtn,
  Modal,
  DownloadLink,
  LockBody,
  Agenda,
  HowToPay,
  RequestWork,
  ImagesHolder,
  Image,
} from "./styles/modal";
import { ArrowLeft } from "phosphor-react";
export default function ModalPage({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

ModalPage.TitleHolder = function ModalPageTitleHolder({
  children,
  ...restProps
}) {
  return <TitleHolder {...restProps}>{children}</TitleHolder>;
};

ModalPage.CourseCard = function ModalPageCourseCard({
  children,
  ...restProps
}) {
  return <CourseCard {...restProps}>{children}</CourseCard>;
};

ModalPage.CoursesHolder = function ModalPageCoursesHolder({
  children,
  ...restProps
}) {
  return <CoursesHolder {...restProps}>{children}</CoursesHolder>;
};

// some logic gose here..
ModalPage.OverLay = function ModalPageTitleHolder({
  setPortal,
  data,
  ...restProps
}) {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState("agenda");
  console.log({ data });
  const tabs = [
    {
      name: "Agenda",
      tabName: "agenda",
      koko: 1,
    },
    {
      name: "How to pay?",
      tabName: "how",
      koko: 1,
    },
    {
      name: "Photos",
      koko: data ? data.images.length : [],
      tabName: "photo",
    },
  ];
  // handel tabs conditions
  const renderTabsContent = () => {
    if (name === "agenda")
      return (
        <DownloadLink target="_blank" href={data ? data.agenda : "empty"}>
          {data ? data.agenda : "empty"}
        </DownloadLink>
      );
    else if (name === "how")
      return <HowToPay src="/images/payment.png"></HowToPay>;
    else
      return (
        <ImagesHolder>
          {data
            ? data.images.map(({ src }) => <Image key={src} src={src} />)
            : []}
        </ImagesHolder>
      );
  };

  return (
    <OverLay className="modal" {...restProps}>
      <Modal {...restProps}>
        <ArrowLeft
          onClick={() => setPortal(false)}
          cursor={"pointer"}
          color="rgb(59, 59, 59)"
          overflow={"visible"}
          size={26}
        />
        <Group
          alignItems="center"
          justifyMob="flex-start"
          alignMob="flex-start"
          directionMob="column"
          gapMob="16px"
          justifyContent="space-between"
        >
          <CourseName>{data ? data.name : "empty"}</CourseName>
          <RegisterBtn
            target="_blank"
            href={data ? data.registrationForm : "empty"}
          >
            Register now
          </RegisterBtn>
        </Group>
        <Group gap="8px" direction="column">
          <ProgrameDetails>Programe Details</ProgrameDetails>
          <Text>{data ? data.desc : ""}</Text>
        </Group>
        <Group gap="24px" direction="column">
          <Group gap="8px" direction="row">
            {tabs.map((tab, i) =>
              tab.koko ? (
                <TabBtn
                  onClick={() => {
                    setIndex(i);
                    setName(tab.tabName);
                  }}
                  active={index === i}
                  key={tab.name}
                >
                  {tab.name}
                </TabBtn>
              ) : null
            )}
          </Group>
          <Group gap="8px" direction="column">
            <Agenda>{tabs[index].name}</Agenda>
            {renderTabsContent()}
          </Group>
        </Group>
      </Modal>
    </OverLay>
  );
};

// end of the logic -----------

ModalPage.TitleHolder = function ModalPageTitleHolder({
  children,
  ...restProps
}) {
  return <TitleHolder {...restProps}>{children}</TitleHolder>;
};

ModalPage.ProgrameDetails = function ModalPageProgrameDetails({
  children,
  ...restProps
}) {
  return <ProgrameDetails {...restProps}>{children}</ProgrameDetails>;
};

ModalPage.CourseName = function ModalPageCourseName({
  children,
  ...restProps
}) {
  return <CourseName {...restProps}>{children}</CourseName>;
};

ModalPage.Text = function ModalPageText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

ModalPage.Group = function ModalPageGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

ModalPage.TabBtn = function ModalPageTabBtn({ children, ...restProps }) {
  return <TabBtn {...restProps}>{children}</TabBtn>;
};

ModalPage.RegisterBtn = function ModalPageRegisterBtn({
  children,
  ...restProps
}) {
  return <RegisterBtn {...restProps}>{children}</RegisterBtn>;
};

ModalPage.DownloadLink = function ModalPageDownloadLink({
  children,
  ...restProps
}) {
  return <DownloadLink {...restProps}>{children}</DownloadLink>;
};

ModalPage.LockBody = function ModalPageLockBody({ children, ...restProps }) {
  return <LockBody {...restProps}>{children}</LockBody>;
};

ModalPage.RequestWork = function ModalPageRequestWork({
  children,
  ...restProps
}) {
  return <RequestWork {...restProps}>{children}</RequestWork>;
};
