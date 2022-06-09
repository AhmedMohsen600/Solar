import React from "react";
import { CaretCircleRight } from "phosphor-react";
export default function CustomeRightButton({ onClick }) {
  return (
    <CaretCircleRight
      className="right-circle"
      style={{
        position: "absolute",
        top: "50%",
        right: "-10%",
        transform: "translate(0%,-50%)",
        cursor: "pointer",
      }}
      onClick={() => onClick()}
      color="rgb(204, 204, 204)"
      size="60"
    />
  );
}
