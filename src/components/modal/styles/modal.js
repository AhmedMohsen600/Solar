import styled, { createGlobalStyle } from "styled-components/macro";

export const Container = styled.section`
  min-height: 80vh;
  width: var(--container-width);
  margin: 90px auto auto auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const TitleHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CoursesHolder = styled.ul`
  display: flex;
  gap: 32px;
  flex-wrap: wrap;
  :last-child {
    margin-bottom: 60px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const CourseCard = styled.li`
  flex-basis: 30.7rem;
  position: relative;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, hsl(0, 0%, 0%) 100%),
    url(${({ src }) => src}) center / cover no-repeat;
  width: 290px;
  height: 290px;
  list-style: none;
  border-radius: 16px;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const OverLay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease 0.1s;
  pointer-events: ${({ portal }) => (portal ? "all" : "none")};
  opacity: ${({ portal }) => (portal ? "1" : "0")};
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const Modal = styled.section`
  padding: 40px;
  width: 763px;
  background-color: white;
  border-radius: 24px;
  transition: all 0.3s ease 0.1s;
  transform: ${({ portal }) => (portal ? "scale(1)" : "scale(1.3)")};
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: 700px) {
    max-height: 90%;
    overflow-y: auto;
    width: 98%;
    padding: 32px;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  justify-content: ${({ justifyContent }) => justifyContent};
  width: ${({ width }) => width};
  align-items: ${({ alignItems }) => alignItems};
  @media (max-width: 700px) {
    justify-content: ${({ justifyMob }) => justifyMob};
    flex-direction: ${({ directionMob }) => directionMob};
    width: ${({ widthMob }) => widthMob};
    gap: ${({ gapMob }) => gapMob};
    align-items: ${({ alignMob }) => alignMob};
  }
`;

export const CourseName = styled.h3`
  color: var(--secondry-color);
  font-weight: 700;
  line-height: 1.2;
  font-size: 3rem;
`;

export const ProgrameDetails = styled.h5`
  color: var(--color-black);
  font-size: var(--link-size);
  font-weight: 600;
  line-height: 1.2;
`;

export const Text = styled.p`
  font-size: var(--link-size);
  font-weight: 400;
  color: #a8a8a8;
  line-height: 1.2;
  text-transform: capitalize;
`;

export const TabBtn = styled.button`
  padding: 8px 16px;
  border-radius: 16px;
  font-size: 12px;
  line-height: 1.2;
  display: flex;
  border: 0;
  font-weight: 400;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  background-color: ${({ active }) =>
    active ? "rgba(1, 51, 101, 0.1)" : "var(-secondary-color)"};
  cursor: pointer;
`;

export const RegisterBtn = styled.a`
  border-radius: 4px;
  padding: 10px;
  background-color: rgb(1, 51, 101);
  text-decoration: none;
  font-size: var(--link-size);
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: rgb(255, 255, 255);
  }
`;

export const DownloadLink = styled.a`
  color: var(--secondry-color);
  text-decoration: none;
  background-color: ${({ bgColor }) => bgColor};
  font-size: 1.6rem;
  line-height: 1.2;
  &:hover {
    color: var(--secondry-color);
  }
`;

export const RequestWork = styled.a`
  font-size: 1.6rem;
  text-decoration: none;
  color: white;
  background-color: var(--secondry-color);
  border-radius: 4px;
  padding: 10px;
`;

export const Agenda = styled.h5`
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.2;
  transition: all 1s;
`;

export const HowToPay = styled.img`
  width: 100%;
  height: 290px;
  object-fit: cover;
  @media (max-width: 600px) {
    height: auto;
  }
`;

export const ImagesHolder = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Image = styled.li`
  list-style: none;
  background: url(${({ src }) => src}) center / cover no-repeat;
  flex-basis: calc(100% / 6);
  height: 100px;
  @media (max-width: 1000px) {
    flex-basis: calc(100% / 6);
  }
  @media (max-width: 600px) {
    height: 200px;
    flex-basis: calc(100% / 4);
  }
  @media (max-width: 400px) {
    flex-basis: calc(100% / 3);
  }
  @media (max-width: 390px) {
    flex-basis: calc(100% / 1);
  }
`;

export const LockBody = createGlobalStyle`
   body {
       overflow: hidden;
   }
`;
