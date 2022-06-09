import React from "react";
import { Installment, Hero, SmcGroup, Benefits } from "../components";
import bankData from "../fixtures/bank-images.json";
export function InstallmentContainer() {
  return (
    <Installment>
      <Installment.BigImage src="/images/offers.svg" />
      <Installment.Group flex="1" gap="40px">
        <Installment.Group gap="8px">
          <SmcGroup.Title mobWidth="245px" maxWidth="407px">
            Installment Offers
            <Hero.Line />
          </SmcGroup.Title>
          <Hero.Desc maxWidth="800px">
            Now you can buy a solar power plant, solar heater or solar
            headlights and pay the same price as cash. you can
            <Benefits.TextColor> installment</Benefits.TextColor> your invoice
            <Benefits.TextColor> without interest</Benefits.TextColor> throught
            the following banks:
          </Hero.Desc>
        </Installment.Group>
        <Installment.ImagesGroup width="70%">
          {bankData.map((data) => (
            <Installment.BankImage
              key={data.src}
              src={data.src}
              alt="koko"
              title={data.name}
            />
          ))}
        </Installment.ImagesGroup>
      </Installment.Group>
    </Installment>
  );
}
