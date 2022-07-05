import React from "react";
import { HeaderContainer } from "../containers/header";

export default function PageNotFound() {
  return (
    <>
      <HeaderContainer />
      <div
        style={{
          minHeight: "65vh",
          fontSize: "100px",
          textAlign: "center",
          paddingTop: "80px",
        }}
      >
        Page not found!!
      </div>
    </>
  );
}
