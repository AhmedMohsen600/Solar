import React from "react";
import { FooterContainer } from "../containers/footer";
import { ScrollToTop } from "../hooks";
export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <FooterContainer />
      <ScrollToTop />
    </>
  );
}
