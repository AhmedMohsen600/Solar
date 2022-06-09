import React from "react";
import { About, Hero, Form } from "../components";
import { Question, Target, Eye } from "phosphor-react";
import { FqsContainer } from "../containers/fqs";
import { HeaderContainer } from "../containers/header";
export default function AboutUs() {
  return (
    <>
      <HeaderContainer aria-label="header-group" />
      <About>
        <Form.Group padding="40px 0 0 0" alignItems="center" gap="8px">
          <Form.PageName>
            About Us
            <Hero.Line />
          </Form.PageName>
          <Form.Text>Who are we? Our mission & vission?</Form.Text>
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_xwipaalv.json"
            background="transparent"
            speed="1"
            style={{
              width: "300px",
              height: "300px",
            }}
            loop
            autoplay
          />
        </Form.Group>
        <About.CardsHolder>
          <About.Card>
            <About.Round>
              <Question size="26px" color="var(--color-hover)" />
            </About.Round>
            <About.CardTitle>Who are we?</About.CardTitle>
            <About.CardDesc>
              SMC Group is a fresh outbreak that provides all relative works &
              services to Solar Energy: (PV Solar plants, Solar Water Heaters,
              PV Modules, Energy Saving System, Consulting) And also provides
              Training for Electrical engineering students in different
              branches.
            </About.CardDesc>
          </About.Card>
          <About.Card>
            <About.Round>
              <Target size="26px" color="var(--color-hover)" />
            </About.Round>
            <About.CardTitle>Mission</About.CardTitle>
            <About.CardDesc>
              is to be the most reliable company in the fields of Solar Energy &
              Energy Saving, and to provide the most efficient trainings for
              engineers who are looking for mastering their field.
            </About.CardDesc>
          </About.Card>
          <About.Card>
            <About.Round>
              <Eye size="26px" color="var(--color-hover)" />
            </About.Round>
            <About.CardTitle>Vission</About.CardTitle>
            <About.CardDesc>
              is to make the regular consumer, who complains of the Excessive
              costs of energy, a producer who see the energy is not an obstacle
              in his life nor his earning, and also to create a generation of
              engineers that know how to do the work, not only how it works.
            </About.CardDesc>
          </About.Card>
        </About.CardsHolder>
        <FqsContainer />
      </About>
    </>
  );
}
