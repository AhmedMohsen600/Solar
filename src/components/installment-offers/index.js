import React from "react";
import {
  Container,
  Inner,
  ImagesGroup,
  BankImage,
  BigImage,
  Group,
} from "./styles/installment-offers";

export default function Installment({ children }) {
  return (
    <Container>
      <Inner>{children}</Inner>
    </Container>
  );
}

Installment.ImagesGroup = function InstallmentImagesGroup({
  children,
  ...restProps
}) {
  return <ImagesGroup {...restProps}>{children}</ImagesGroup>;
};

Installment.BankImage = function InstallmentBankImage({ ...restProps }) {
  return <BankImage {...restProps} />;
};

Installment.BigImage = function InstallmentBigImage({ ...restProps }) {
  return <BigImage {...restProps} />;
};

Installment.Group = function InstallmentGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};
