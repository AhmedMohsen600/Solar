import React from "react";
import { useNavigate } from "react-router-dom";
import { SmcGroup, Hero, Header } from "../components";

export function SmcContainer() {
  const navigate = useNavigate();
  return (
    <SmcGroup>
      <SmcGroup.InfoHolder gap="8px" flex="1">
        <SmcGroup.Title mobWidth="150px" maxWidth="246px">
          SMC Group <Hero.Line />
        </SmcGroup.Title>
        <Hero.Desc maxWidth="600px">
          SMC Group provides all relative works & services to Solar Energy.Aslo
          provides Training for Electrical engineering students in diffrent
          branches.
        </Hero.Desc>
      </SmcGroup.InfoHolder>
      <SmcGroup.Group>
        <SmcGroup.Card mobWidth="85%">
          <SmcGroup.Logo src="logo" />
          <SmcGroup.Round>
            <SmcGroup.Image src="house" />
          </SmcGroup.Round>
          <SmcGroup.CompanyName>SMC Solar</SmcGroup.CompanyName>
          <SmcGroup.Description>
            A fresh outbreak that provides all relative works & services to
            Solar Energy
          </SmcGroup.Description>
          <Header.Button
            color="var(--primary-color)"
            bgColor="rgba(2, 115, 133, 0.1)"
            bgHover="var(--primary-color)"
            colHover="white"
            onClick={() => {
              navigate("/services");
            }}
          >
            Our services
          </Header.Button>
        </SmcGroup.Card>
        <SmcGroup.Card mobWidth="85%">
          <SmcGroup.Logo src="logo1" />
          <SmcGroup.Round>
            <SmcGroup.Image src="woman" />
          </SmcGroup.Round>
          <SmcGroup.CompanyName>SMC Academy</SmcGroup.CompanyName>
          <SmcGroup.Description>
            Providing multiple Training Programs for engineering students in
            different branches.
          </SmcGroup.Description>
          <Header.Button
            color="var(--secondry-color)"
            bgColor="rgba(1, 51, 101, 0.1)"
            bgHover="var(--secondry-color)"
            colHover="white"
            onClick={() => navigate("/academy")}
          >
            Go to Academy
          </Header.Button>
        </SmcGroup.Card>
      </SmcGroup.Group>
    </SmcGroup>
  );
}
