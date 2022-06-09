import React, { useState, useEffect } from "react";
import { Header, Modal } from "../components";
import headerAcademyData from "../fixtures/header-academy.json";
import { useNavigate, useLocation } from "react-router-dom";
import { List, X } from "phosphor-react";
export function HeaderAcademyContainer() {
  const [header, setHeader] = useState(false);
  const [burger, setBurger] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    function changeHeaderStyle() {
      if (window.scrollY >= 10) setHeader(true);
      else setHeader(false);
    }
    window.addEventListener("scroll", changeHeaderStyle);
    return () => window.removeEventListener("scroll", changeHeaderStyle);
  }, [header]);

  const { pathname, hash } = useLocation();

  const linkList = headerAcademyData.map((link) =>
    link.text === "contact" ? (
      <Header.HeaderAcademyLink
        onClick={() => {
          if (link.text === "contact")
            localStorage.setItem("path", JSON.stringify("academy"));
        }}
        active={pathname === link.route ? 1 : 0}
        key={link.text}
        to={link.route}
      >
        {link.name}
      </Header.HeaderAcademyLink>
    ) : (
      <Header.AcademyLink
        to={`/academy#${link.text}`}
        active={`${pathname}${hash}` === link.href ? 1 : 0}
        key={link.text}
      >
        {link.name}
      </Header.AcademyLink>
    )
  );

  const renderAcadmeyBtn = () => {
    return (
      <Header.Button
        onClick={() => navigate("/")}
        color="var(--primary-color)"
        bgColor="rgba(2, 115, 133, 0.1)"
        bgHover="var(--primary-color)"
        colHover="white"
      >
        Back to Group
      </Header.Button>
    );
  };
  return (
    <>
      {burger ? null : <Modal.LockBody />}
      <Header.MenuMob active={burger}>
        <Header.GroupMob>
          <Header.NavLinksMob>
            {linkList}
            {renderAcadmeyBtn()}
          </Header.NavLinksMob>
          <X
            cursor="pointer"
            onClick={() => setBurger(true)}
            color="black"
            fontSize={22}
          />
        </Header.GroupMob>
      </Header.MenuMob>
      <Header.HeaderMob active={header}>
        <Header.AcademyLogo />
        <Header.BurgerIcon onClick={() => setBurger(false)}>
          <List color="var(--primary-color)" fontSize={22} weight="regular" />
        </Header.BurgerIcon>
      </Header.HeaderMob>
      <Header active={header}>
        <Header.AcademyLogo />
        <Header.Group>
          {linkList}
          {renderAcadmeyBtn()}
        </Header.Group>
      </Header>
    </>
  );
}
