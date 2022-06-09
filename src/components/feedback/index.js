import React from "react";
import {
  Container,
  Inner,
  CardImage,
  CardModal,
  OverLay,
  LockBody,
} from "./styles/feedback";

export default function Feedback({ children }) {
  return <Container id="feedback">{children}</Container>;
}
Feedback.Inner = function FeedbackInner({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
};

Feedback.CardModal = function FeedbackCardModal({ ...restProps }) {
  return <CardModal {...restProps} />;
};

Feedback.OverLay = function FeedbackOverLay({ ...restProps }) {
  return <OverLay {...restProps} />;
};

Feedback.CardImage = function FeedbackCardImage({ ...restProps }) {
  return <CardImage {...restProps} />;
};

Feedback.LockBody = function FeedbackLockBody() {
  return <LockBody />;
};
