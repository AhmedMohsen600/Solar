import React from "react";
import { Footer } from "../components";
import {
  Copyright,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  MapPin,
  Phone,
} from "phosphor-react";
export function FooterContainer() {
  const iconColor = "rgb(255, 255, 255)";
  const iconSize = "30px";
  return (
    <Footer>
      <Footer.Row>
        <Footer.Column self="flex-end" gap="16px">
          <Footer.Logo />
          <Footer.Desc maxWidth="430px">
            SMC Group provides all relative works & services to Solar Energy.
            Also provides Trainings for engineering students in different
            branches.
          </Footer.Desc>
          <Footer.Group gap="4px">
            <Copyright color={iconColor} />
            <Footer.Desc>SMC 2020</Footer.Desc>
          </Footer.Group>
        </Footer.Column>
        <Footer.Break />
        <Footer.Column gap="8px">
          <Footer.Desc>Follow us</Footer.Desc>
          <Footer.Group gap="8px">
            <a
              rel="noreferrer"
              href="https://www.facebook.com/SolarMasterCell"
              target="_blank"
            >
              <FacebookLogo fontSize={iconSize} color={iconColor} />
            </a>
            <a
              rel="noreferrer"
              href="https://www.instagram.com/smc.egy"
              target="_blank"
            >
              <InstagramLogo fontSize={iconSize} color={iconColor} />
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/company/sollarmastercell"
              target="_blank"
            >
              <LinkedinLogo fontSize={iconSize} color={iconColor} />
            </a>
          </Footer.Group>
        </Footer.Column>
        <Footer.Break />
        <Footer.Column gap="8px">
          <Footer.Desc>Contact us</Footer.Desc>
          <Footer.Group gap="8px">
            <MapPin fontSize="20px" color={iconColor} />
            <Footer.Desc>
              Headquarter: <br />
              298 Al Batea - Moazi Al Mehawar Al Markazi,6th October
              <br /> City, Giza Government, Egypt
            </Footer.Desc>
          </Footer.Group>
          <Footer.Group gap="8px">
            <Phone fontSize="20px" color={iconColor} />
            <Footer.Desc>+20 109 580 8279</Footer.Desc>
          </Footer.Group>
        </Footer.Column>
      </Footer.Row>
    </Footer>
  );
}
