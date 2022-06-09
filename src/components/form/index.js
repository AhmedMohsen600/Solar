import React from "react";
import {
  Container,
  Inner,
  PageName,
  FormBase,
  ContactInfo,
  Group,
  CircleGroup,
  BigCircle,
  SmallCircle,
  InfoGroup,
  Title,
  SocialMediaLinks,
  Desc,
  SubmitBtn,
  Input,
  Label,
  TextArea,
  Text,
  SocialContent,
  SocialTitle,
  Branches,
  City,
  AcademyBranches,
  BranchGroup,
  CityGroup,
  GoogleMap,
} from "./styles/form";

export default function Form({ children }) {
  return <Container>{children}</Container>;
}

Form.PageName = function FormPageName({ children }) {
  return <PageName>{children}</PageName>;
};

Form.Inner = function FormInner({ children }) {
  return <Inner>{children}</Inner>;
};

Form.FormBase = function FormFormBase({ children }) {
  return <FormBase>{children}</FormBase>;
};

Form.ContactInfo = function FormContactInfo({ children, ...restProps }) {
  return <ContactInfo {...restProps}>{children}</ContactInfo>;
};

Form.Group = function FormGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Form.CircleGroup = function FormCircleGroup() {
  return (
    <CircleGroup>
      <BigCircle>
        <SmallCircle />
      </BigCircle>
    </CircleGroup>
  );
};

Form.InfoGroup = function FormInfoGroup({ children, ...restProps }) {
  return <InfoGroup {...restProps}>{children}</InfoGroup>;
};

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.SocialMediaLinks = function FormSocialMediaLinks({
  children,
  ...restProps
}) {
  return <SocialMediaLinks {...restProps}>{children}</SocialMediaLinks>;
};

Form.Desc = function FormTitle({ children, ...restProps }) {
  return <Desc {...restProps}>{children}</Desc>;
};

Form.SubmitBtn = function FormSubmitBtn({ children, ...restProps }) {
  return <SubmitBtn {...restProps}>{children}</SubmitBtn>;
};

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

Form.Label = function FormLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>;
};
Form.TextArea = function FormTextArea({ ...restProps }) {
  return <TextArea {...restProps} />;
};

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Form.SocialTitle = function FormSocialTitle({ children, ...restProps }) {
  return <SocialTitle {...restProps}>{children}</SocialTitle>;
};

Form.SocialContent = function FormSocialContent({ children, ...restProps }) {
  return <SocialContent {...restProps}>{children}</SocialContent>;
};

Form.Branches = function FormBranches({ children, ...restProps }) {
  return <Branches {...restProps}>{children}</Branches>;
};

Form.AcademyBranches = function FormAcademyBranches({
  children,
  ...restProps
}) {
  return <AcademyBranches {...restProps}>{children}</AcademyBranches>;
};

Form.City = function FormCity({ children, ...restProps }) {
  return <City {...restProps}>{children}</City>;
};

Form.BranchGroup = function FormBranchGroup({ children, ...restProps }) {
  return <BranchGroup {...restProps}>{children}</BranchGroup>;
};

Form.CityGroup = function FormCityGroup({ children, ...restProps }) {
  return <CityGroup {...restProps}>{children}</CityGroup>;
};

Form.GoogleMap = function FormGoogleMap({ children, ...restProps }) {
  return <GoogleMap {...restProps}>{children}</GoogleMap>;
};
