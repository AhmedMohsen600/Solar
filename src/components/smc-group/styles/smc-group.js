import styled from "styled-components/macro";

export const Container = styled.section`
  min-height: 70vh;
  display: flex;
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: 24px 0;
  @media (min-width: 1500px) {
    min-height: 50vh;
  }
  @media (min-width: 2000px) {
    min-height: 40vh;
  }
`;

export const Inner = styled.div`
  width: var(--container-width);
  margin: auto;
  display: flex;
  align-items: center;
  gap: 40px;
  @media (max-width: 912px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  position: relative;
  font-size: var(--title-size);
  font-weight: 700;
  color: var(--color-black);
  max-width: ${({ maxWidth }) => maxWidth};
  @media (max-width: 912px) {
    max-width: ${({ isLong }) => (isLong ? isLong : "auto")};
  }
  @media (max-width: 600px) {
    max-width: ${({ mobWidth }) => mobWidth};
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 40px;
  border-radius: 24px;
  flex: 1;
  background-color: #f7f7f7;
  text-align: center;
  @media (max-width: 600px) {
    width: ${({ mobWidth }) => mobWidth};
  }
`;

export const Group = styled.div`
  gap: 40px;
  flex: 1.1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    flex-wrap: wrap;
    max-height: 600px;
    overflow-x: auto;
    gap: 24px;
    width: 100%;
  }
`;

export const CompanyName = styled.h3`
  font-size: 18px;
  line-height: 1.2;
  font-weight: 600;
`;

export const Logo = styled.div`
  background: url(${({ src }) => `/images/${src}.svg`}) center / contain
    no-repeat;
  height: 40px;
  width: 98px;
`;

export const Round = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 200px;
  background-color: var(--color-smoke);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled(Logo)`
  width: 200px;
  height: 110px;
  position: absolute;
`;

export const InfoHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width};
  flex: ${({ flex }) => flex};
  gap: ${({ gap }) => gap};
  @media (max-width: 912px) {
    width: auto;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Description = styled.p`
  font-size: var(--small-size);
  font-weight: 400;
  color: var(--color-desc);
`;
