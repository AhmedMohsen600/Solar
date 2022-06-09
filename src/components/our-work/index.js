import React from "react";

import { Container, Inner, ImageHolder } from "./styles/our-work";

export default function OurWork({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner {...restProps}>{children}</Inner>
    </Container>
  );
}

OurWork.ImageHolder = function OurWorkImageHolder({ ...restProps }) {
  return <ImageHolder {...restProps} />;
};
