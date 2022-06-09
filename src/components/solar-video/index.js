import React from "react";
import styled from "styled-components/macro";

export default function SolarVideo() {
  return <Video preload="auto" controls={true} muted={true} />;
}

const Video = styled.video`
  width: 560px;
  object-fit: cover;
  height: 300px;
  border-radius: 16px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
