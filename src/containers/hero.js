import React from "react";
import { Hero } from "../components";
import { CaretCircleRight } from "phosphor-react";
import { useNavigate } from "react-router-dom";
export function HeroContainer() {
  const navigate = useNavigate();
  return (
    <Hero>
      <Hero.Image src="background" />
      <Hero.Group direction="column">
        <Hero.TitleGroup margin="90px 0 0 0">
          <Hero.Title mobWidth="200px" maxWidth="455px" color="#474747">
            Solar Energy is <Hero.Line />
          </Hero.Title>
          <Hero.Title mobWidth="180px" maxWidth="409px" color="#027385">
            THE FUTURE! <Hero.Line />
          </Hero.Title>
        </Hero.TitleGroup>
        <Hero.Desc maxWidth="400px">
          Solar energy can save you up to 100% of your electricity or natural
          gas consumption
        </Hero.Desc>
        <Hero.Holder>
          <Hero.Link onClick={() => navigate("/contact-us")}>
            Request Consultaion
          </Hero.Link>
          <CaretCircleRight
            color="rgb(204, 204, 204)"
            fontSize="26"
            weight="regular"
          />
        </Hero.Holder>
      </Hero.Group>
      <Hero.WorkerImage src="sun" />
    </Hero>
  );
}
