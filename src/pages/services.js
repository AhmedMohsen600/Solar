import React from "react";
import { HeaderContainer } from "../containers/header";
import { Form, Hero, Services } from "../components";
import { servicesData } from "../fixtures/servicesData";
import { Link } from "react-router-dom";
import { CaretCircleRight } from "phosphor-react";
export default function ServicesPage() {
  return (
    <>
      <HeaderContainer />
      <Services>
        <Form.PageName>
          Serivces <Hero.Line />
        </Form.PageName>
      </Services>
      <Services.Container>
        <Services.CardsHolder>
          {servicesData.map((serv, i) => {
            if (i > 3) return null;
            return (
              <Services.Card key={serv.serviceName}>
                <Services.Group>
                  {serv.svgElem}
                  <Services.CardTitle>{serv.serviceName}</Services.CardTitle>
                </Services.Group>
                <Services.Description>{serv.desc}</Services.Description>
              </Services.Card>
            );
          })}
        </Services.CardsHolder>
        <Services.CardsHolder marginTop="160px">
          {servicesData.map((serv, i) => {
            if (i <= 3) return null;
            return (
              <Services.Card key={serv.serviceName}>
                <Services.Group>
                  {serv.svgElem}
                  <Services.CardTitle>{serv.serviceName}</Services.CardTitle>
                </Services.Group>
                <Services.Description>{serv.desc}</Services.Description>
                {serv.seeAcadmey ? (
                  <Link style={{ textDecoration: "none" }} to="/academy">
                    <Hero.Holder>
                      <Hero.Link color="cl">See Academy</Hero.Link>
                      <CaretCircleRight
                        color="rgb(204, 204, 204)"
                        fontSize="26"
                        weight="regular"
                      />
                    </Hero.Holder>
                  </Link>
                ) : null}
              </Services.Card>
            );
          })}
        </Services.CardsHolder>
      </Services.Container>
    </>
  );
}
