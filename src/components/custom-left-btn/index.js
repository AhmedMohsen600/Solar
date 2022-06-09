import React from "react";

import { CaretCircleLeft } from "phosphor-react";
export default function CustomeRightButton({ onClick }) {
  return (
    <CaretCircleLeft
      className="left-circle"
      style={{
        position: "absolute",
        left: "-10%",
        top: "50%",
        transform: "translate(0%,-50%)",
        cursor: "pointer",
      }}
      onClick={() => onClick()}
      color="rgb(204, 204, 204)"
      size="60"
    />
  );
}
