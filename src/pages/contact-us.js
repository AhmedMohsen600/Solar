import React, { useState } from "react";
import { Form, Hero } from "../components";
import {
  At,
  Phone,
  MapPin,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "phosphor-react";
import { HeaderContainer } from "../containers/header";
import { HeaderAcademyContainer } from "../containers/header-academy";
import CityData from "../fixtures/branches.json";

export default function ContactUs() {
  const [isHome] = useState(JSON.parse(localStorage.getItem("path")));

  return (
    <>
      {isHome === "home" ? (
        <HeaderContainer aria-label="header-group" />
      ) : (
        <HeaderAcademyContainer aria-label="header-academy" />
      )}
      <Form>
        <Form.Group
          width="92%"
          marginLR="auto"
          alignItems="center"
          padding="40px 0 0 0"
        >
          <Form.PageName>
            Contact Us
            <Hero.Line />
          </Form.PageName>
          <Form.Text>
            Any questions or remarks? Just write us a message
          </Form.Text>
          <div className="social-group">
            <Form.SocialContent bgColor="rgba(2, 115, 133, 0.1)">
              <Form.SocialTitle color="#027385">SMC Group</Form.SocialTitle>
              <Form.SocialMediaLinks>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/SolarMasterCell"
                >
                  <FacebookLogo
                    fontSize={20}
                    color="rgb(2, 115, 133)"
                    weight="fill"
                  />
                </a>
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/smc.egy"
                >
                  <InstagramLogo
                    fontSize={20}
                    color="rgb(2, 115, 133)"
                    weight="fill"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/sollarmastercell"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedinLogo
                    fontSize={20}
                    color="rgb(2, 115, 133)"
                    weight="fill"
                  />
                </a>
              </Form.SocialMediaLinks>
            </Form.SocialContent>
            <Form.SocialContent bgColor="rgba(1, 51, 101, 0.1)">
              <Form.SocialTitle color="#013365">Academy</Form.SocialTitle>
              <Form.SocialMediaLinks>
                <a
                  href="https://www.facebook.com/SMC.Academy.egy"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookLogo
                    color="rgb(1, 51, 101)"
                    fontSize={20}
                    weight="fill"
                  />
                </a>
                <a
                  href="https://www.instagram.com/smc.academy__"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogo
                    fontSize={20}
                    color="rgb(1, 51, 101)"
                    weight="fill"
                  />
                </a>
              </Form.SocialMediaLinks>
            </Form.SocialContent>
            <a
              style={{ textDecoration: "none" }}
              href="https://wa.me/message/UHP7RC6ZLSHGL1"
              target="_blank"
              rel="noreferrer"
            >
              <Form.SocialContent bgColor="rgba(59, 171, 68, 0.1)">
                <Form.SocialTitle color="rgb(59, 171, 68)">
                  Whatsapp
                </Form.SocialTitle>
                <Form.SocialMediaLinks>
                  <WhatsappLogo
                    color="rgb(59, 171, 68)"
                    fontSize={20}
                    weight="fill"
                  />
                </Form.SocialMediaLinks>
              </Form.SocialContent>
            </a>
          </div>
        </Form.Group>
        <Form.Inner>
          <Form.FormBase>
            <Form.Group gap="4px">
              <Form.Title
                color={
                  isHome === "home"
                    ? "var(--primary-color)"
                    : "var(--secondry-color)"
                }
              >
                Get in touch
              </Form.Title>
              <Form.Desc color="#808080" maxWidth="300px">
                fill up the form and our team will get back to you within 24
                hours
              </Form.Desc>
            </Form.Group>
            <Form.Group gap="8px">
              <Form.Label htmlFor="name">Your Name</Form.Label>
              <Form.Input
                id="name"
                placeholder="Enter your name"
                required
                type="text"
              />
            </Form.Group>
            <Form.Group gap="8px">
              <Form.Label htmlFor="email">Your Email</Form.Label>
              <Form.Input
                id="email"
                placeholder="Enter your email"
                required
                type="email"
              />
            </Form.Group>
            <Form.Group gap="8px">
              <Form.Label htmlFor="phone">Phone Number</Form.Label>
              <Form.Input
                id="phone"
                placeholder="Enter your phone number"
                type="text"
              />
            </Form.Group>
            <Form.Group gap="8px">
              <Form.Label htmlFor="message">Your Message</Form.Label>
              <Form.TextArea
                id="message"
                placeholder="Enter Message Details here"
                type="text"
                rows="5"
                cols="50"
              />
            </Form.Group>
            <Form.SubmitBtn
              color={
                isHome === "home"
                  ? "var(--primary-color)"
                  : "var(--secondry-color)"
              }
              bgColor={
                isHome === "home"
                  ? "rgba(2, 115, 133, 0.1)"
                  : "rgba(1, 51, 101, 0.1)"
              }
              bgHover={
                isHome === "home"
                  ? "var(--primary-color)"
                  : "var(--secondry-color)"
              }
              colHover="white"
              self="flex-end"
              type="submit"
            >
              Send Message
            </Form.SubmitBtn>
          </Form.FormBase>
          <Form.ContactInfo
            bgColor={
              isHome === "home"
                ? "var(--primary-color)"
                : "var(--secondry-color)"
            }
          >
            <Form.Group gap="24px">
              <Form.Title color="var(--color-hover)">Contact Info</Form.Title>
              <Form.Group gap="16px">
                <Form.InfoGroup alignItems="center">
                  <At size={20} color="var(--color-hover)" />
                  <Form.Desc color="var(--color-hover)">
                    info@smcgroupegy.com
                  </Form.Desc>
                </Form.InfoGroup>
                <Form.InfoGroup alignItems="center">
                  <Phone size={20} color="var(--color-hover)" />
                  <Form.Desc color="var(--color-hover)">
                    +20 109 580 8279
                  </Form.Desc>
                </Form.InfoGroup>
                <Form.InfoGroup>
                  <MapPin size={20} color="var(--color-hover)" />
                  <Form.Desc color="var(--color-hover)">
                    Headquarter: <br />
                    298 Al Batea - Moazi Al Mehawar Al Markazi,6th October
                    <br /> City, Giza Government, Egypt
                  </Form.Desc>
                </Form.InfoGroup>
                <Form.GoogleMap
                  href="https://www.google.com/maps/place/SMC/@29.9849848,30.9447408,17z/data=!3m1!4b1!4m5!3m4!1s0x1458573fe4f1a74d:0xb4f8f7cc99e797bf!8m2!3d29.9849848!4d30.9447408"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open with google maps
                </Form.GoogleMap>
              </Form.Group>
            </Form.Group>
            <lottie-player
              src={
                isHome === "home"
                  ? "https://assets7.lottiefiles.com/packages/lf20_wcuzj8fl.json"
                  : "https://assets7.lottiefiles.com/packages/lf20_ipd377dh.json"
              }
              background="transparent"
              speed="1"
              style={{ width: "300px", height: "290px", alignSelf: "center" }}
              loop
              autoplay
            />
            <Form.CircleGroup />
          </Form.ContactInfo>
          <Form.Branches>
            <Form.BranchGroup>
              <MapPin size={20} weight="fill" />
              <Form.AcademyBranches>SMC Academy Branches</Form.AcademyBranches>
            </Form.BranchGroup>
            <Form.CityGroup>
              {CityData.map(({ city }) => (
                <Form.City key={city}>{city}</Form.City>
              ))}
            </Form.CityGroup>
          </Form.Branches>
        </Form.Inner>
      </Form>
    </>
  );
}
