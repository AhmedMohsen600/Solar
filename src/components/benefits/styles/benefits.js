import styled from "styled-components/macro";

export const Container = styled.section`
  min-height: 70vh;
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: ${({ display }) => display};
  padding: 80px 0;
  @media (min-width: 1500px) {
    min-height: 46vh;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  justify-content: center;
  align-items: center;
  gap: ${({ gap }) => gap};
  width: var(--container-width);

  margin: auto;
  @media (max-width: 912px) {
    flex-direction: ${({ mobDirc }) => mobDirc};
  }
  @media (max-width: 800px) {
    gap: 40px;
    align-items: ${({ alignMob }) => alignMob};
  }
`;

export const Title = styled.h2`
  position: relative;
  font-size: var(--title4-size);
  font-weight: 700;
  color: var(--color-black);
  align-self: ${({ self }) => self};
  max-width: ${({ maxWidth }) => maxWidth};
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  /* @media (max-width: 912px) {
    flex-direction: column;
  } */
`;

export const BigCircle = styled.div`
  position: relative;
  border-radius: 100px;
  aspect-ratio: 1 / 1;
  width: 197px;
  height: 197px;
  background-color: rgba(2, 115, 133, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SmallCricle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(2, 115, 133, 0.1);
  width: 60px;
  height: 60px;
  border-radius: 40px;
  aspect-ratio: 1 / 1;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--primary-color);
`;

export const Desc = styled.p`
  font-size: var(--desc-size);
  max-width: ${({ maxWidth }) => maxWidth};
  text-align: center;
  color: var(--color-desc);
`;

export const TextColor = styled.span`
  color: var(--primary-color);
`;
