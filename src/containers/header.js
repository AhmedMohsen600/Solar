import React, { useEffect, useState } from "react";
import { Header, Modal } from "../components";
import headerData from "../fixtures/header.json";
import { useNavigate, useLocation } from "react-router-dom";
import { List, X } from "phosphor-react";
export function HeaderContainer() {
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
  // access the path name
  const { pathname } = useLocation();

  const linkList = headerData.map((link) => (
    <Header.Link
      to={link.route}
      onClick={() => {
        if (link.text === "contact")
          localStorage.setItem("path", JSON.stringify("home"));
      }}
      active={pathname === link.route ? 1 : 0}
      key={link.text}
    >
      {link.name}
    </Header.Link>
  ));
  const renderSolarBtn = () => {
    return (
      <Header.Button
        onClick={() => navigate("/academy")}
        bgColor="rgba(1, 51, 101, 0.1)"
        color="var(--secondry-color)"
        bgHover="var(--secondry-color)"
        colHover="white"
      >
        Go to Academy
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
            {renderSolarBtn()}
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
        <Header.Logo />
        <Header.BurgerIcon onClick={() => setBurger(false)}>
          <List color="var(--primary-color)" fontSize={22} weight="regular" />
        </Header.BurgerIcon>
      </Header.HeaderMob>
      <Header active={header}>
        <Header.Logo />
        <Header.Group>
          {linkList}
          {renderSolarBtn()}
        </Header.Group>
      </Header>
    </>
  );
}
