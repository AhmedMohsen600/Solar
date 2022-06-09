import React from "react";
import { Fqs, Hero, Header } from "../components";
import { useNavigate } from "react-router-dom";
export function FqsContainer() {
  const navigate = useNavigate();
  return (
    <Fqs>
      <Fqs.Group mob="8px" width="100%" justifyContent="space-between">
        <Fqs.Group direction="column" gap="8px">
          <Fqs.Title>Want to install a solar power plant?</Fqs.Title>
          <Hero.Desc>
            Contact us and we will tell you the most suitable station for
            according to your consumption
          </Hero.Desc>
        </Fqs.Group>

        <Header.Button
          mob="flex-start"
          onClick={() => {
            localStorage.setItem("path", JSON.stringify("home"));
            navigate("/contact-us");
          }}
          bgColor="rgba(2, 115, 133, 0.1)"
          color="var(--primary-color)"
          bgHover="var(--primary-color)"
          colHover="white"
          self="flex-end"
        >
          Contact us
        </Header.Button>
      </Fqs.Group>
    </Fqs>
  );
}

// react life cycle, scoops, code-spilit, virtauldom,SEO, client side and server side rendering, how server side help us in SEO, what is react, context api and redux difference, babel, web back, webpack lazy loading, how to make routing in react js
