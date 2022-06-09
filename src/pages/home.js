import React from "react";
import { HeroContainer } from "../containers/hero";
import { OurWorkContainer } from "../containers/our-work";
import { SmcContainer } from "../containers/smc";
import { BenefitsContainer } from "../containers/benefits";
import { SolarEnergyContainer } from "../containers/solar-energy";
import { FqsContainer } from "../containers/fqs";
import { HeaderContainer } from "../containers/header";
import { InstallmentContainer } from "../containers/Installment-offers";
import { OurServicesContainer } from "../containers/our-services";
export default function HomePage() {
  return (
    <>
      <HeaderContainer aria-label="header-group" />
      <HeroContainer />
      <SmcContainer />
      <OurWorkContainer />
      <OurServicesContainer />
      <SolarEnergyContainer />
      <BenefitsContainer />
      <InstallmentContainer />
      <FqsContainer />
    </>
  );
}
