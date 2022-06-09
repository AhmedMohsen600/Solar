import styled from "styled-components/macro";
import { HashLink } from "react-router-hash-link";
import { Link as RouterLink } from "react-router-dom";
export const Container = styled.header`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: var(--color-smoke);
  box-shadow: ${({ active }) => (active ? "var(--color-shadow)" : null)};
  transition: all 0.5s;
  &:hover {
    background-color: var(--color-hover);
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  display: flex;
  min-height: 10vh;
  justify-content: space-between;
  width: var(--container-width);
  margin: auto;
  align-items: center;
  @media (min-width: 1500px) {
    min-height: 5vh;
  }
`;

export const Group = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const Link = styled(RouterLink)`
  font-size: var(--link-size);
  font-weight: 600;
  text-decoration: none;
  color: ${({ active }) =>
    active ? "var(--primary-color)" : "var(--color-gray)"};
  list-style: none;
  cursor: pointer;
  &:hover {
    color: rgba(2, 115, 133, 0.6);
  }
`;

export const HeaderAcademyLink = styled(Link)`
  color: ${({ active }) =>
    active ? "var(--secondry-color)" : "var(--color-gray)"};
  cursor: pointer;
  &:hover {
    color: rgba(1, 51, 101, 0.6);
  }
  font-size: var(--link-size);
  font-weight: 600;
  text-decoration: none;
`;

export const Button = styled.button`
  color: ${({ color }) => color};
  font-size: var(--link-size);
  font-weight: 550;
  border-radius: 4px;
  background-color: ${({ bgColor }) => bgColor};
  border: 0;
  padding: 10px 16px;
  cursor: pointer;
  transition: all 0.4s;
  align-self: ${({ self }) => self};
  text-decoration: none;
  &:hover {
    background-color: ${({ bgHover }) => bgHover};
    color: ${({ colHover }) => colHover};
  }
  @media (max-width: 953px) {
    align-self: ${({ mob }) => mob};
  }
`;

export const AcademyLink = styled(HashLink)`
  color: ${({ active }) =>
    active ? "var(--secondry-color)" : "var(--color-gray)"};
  cursor: pointer;
  &:hover {
    color: rgba(1, 51, 101, 0.6);
  }
  font-size: var(--link-size);
  font-weight: 600;
  text-decoration: none;
`;

////-------------- mobile view ---------------------

export const HeaderMob = styled(Container)`
  @media (max-width: 800px) {
    display: flex;
  }
  @media (min-width: 801px) {
    display: none;
  }
`;

export const BurgerIcon = styled.div`
  width: 36px;
  height: 36px;
  background-color: rgba(2, 115, 133, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;
`;

export const MenuMob = styled.div`
  position: fixed;
  top: 0;
  transition: transform 0.3s linear;
  right: 0;
  height: 100%;
  width: 254px;
  transform: ${({ active }) =>
    active ? `translateX(100%)` : `translateX(0px)`};
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  z-index: 10000;
  padding: 30px 32px;
  box-shadow: 0px 10px 12px 0px rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
  @media (min-width: 801px) {
    display: none;
  }
`;

export const NavMob = styled(Nav)``;

export const NavLinksMob = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
`;

export const GroupMob = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
