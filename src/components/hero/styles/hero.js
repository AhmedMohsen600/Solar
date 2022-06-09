import styled from "styled-components/macro";

export const Container = styled.section`
  background-color: ${({ bg }) => (bg ? "white" : "rgba(2, 115, 133, 0.1)")};
  min-height: 90vh;
  overflow: hidden;
  position: relative;
  @media (min-width: 1500px) {
    min-height: 50vh;
  }
  @media (max-width: 912px) {
    min-height: 60vh;
  }
  @media (max-width: 540px) {
    min-height: 90vh;
  }
  @media (max-width: 414px) {
    min-height: 80vh;
  }
  @media (max-width: 375px) {
    min-height: 90vh;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => (direction ? "column" : "row")};
  width: ${({ width }) => (width ? "92%" : "84%")};
  margin: auto;
  justify-content: ${({ justifyContent }) => justifyContent};
  @media (max-width: 900px) {
    width: var(--container-width);
  }
`;

export const TitleGroup = styled.div`
  font-size: 6.9rem;
  font-weight: 700;
  margin: ${({ margin }) => margin};
  display: flex;
  flex-direction: column;
  padding-left: ${({ padding }) => padding};
  @media (max-width: 800px) {
    font-size: 3rem;
  }
`;

export const Title = styled.h1`
  position: relative;
  color: ${({ color }) => color};
  font-size: inherit;
  font-weight: inherit;
  max-width: ${({ maxWidth }) => maxWidth};
  @media (max-width: 800px) {
    max-width: ${({ mobWidth }) => mobWidth};
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: ${({ padding }) => padding};
`;

export const Line = styled.div`
  position: absolute;
  right: 1%;
  left: 1%;
  bottom: 10%;
  background-color: ${({ bg }) =>
    bg ? "rgba(1, 51, 101, 0.1)" : "rgba(2, 115, 133, 0.1)"};
  height: 19px;
`;

export const Desc = styled.p`
  font-size: var(--desc-size);
  color: var(--color-desc);
  line-height: 1.4;
  max-width: ${({ maxWidth }) => maxWidth};
  z-index: 100;
`;

export const Image = styled.div`
  background: url(${({ src }) => `/images/${src}.svg`}) center / cover no-repeat;
  height: 904.5px;
  width: 1550px;
  position: absolute;
  top: 0;
  left: -6%;
  @media (min-width: 1500px) {
    height: 1200px;
    width: 2100px;
    left: -50px;
  }
  @media (max-width: 1000px) {
    background: none;
  }
`;

export const Link = styled.a`
  color: ${({ color }) =>
    color ? "var(--secondry-color)" : "var(--primary-color)"};
  font-size: var(--link-size);
  font-weight: 600;
  list-style: none;
  text-decoration: none;
  cursor: pointer;
`;

export const Holder = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  z-index: 100;
`;

export const WorkerImage = styled.div`
  position: absolute;
  top: 11%;
  right: 7.8%;
  background: url(${({ src }) => `/images/${src}.svg`}) center top / contain
    no-repeat;
  height: 500px;
  width: 820px;
  z-index: 600;
  @media (min-width: 1900px) {
    top: 8%;
    right: 5%;
  }
  @media (max-width: 1190px) {
    width: 520px;
  }
  @media (max-width: 1000px) {
    transform: translate(-50%, 0%);
    bottom: 0;
    left: 50%;
    top: auto;
    right: auto;
    height: 300px;
    width: 420px;
  }
  @media (max-width: 600px) {
    width: var(--container-width);
  }
`;

export const ImageAcademy = styled.div`
  background: url(${({ src }) => `/images/${src}.svg`}) center / cover no-repeat;
  height: 900.5px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;
