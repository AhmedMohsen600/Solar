import styled, { createGlobalStyle } from "styled-components/macro";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export const Inner = styled.ul`
  width: var(--container-width);
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

export const OverLay = styled.div`
  position: fixed;
`;

export const CardImage = styled.li`
  height: 241px;
  list-style: none;
  flex-basis: calc(94.5% / 4);
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  background: url(${({ src }) => src}) center / cover no-repeat;
  @media (max-width: 1392px) {
    flex-basis: calc(94.7% / 3);
  }
  @media (max-width: 962px) {
    flex-basis: calc(94.3% / 3);
  }
  @media (max-width: 928px) {
    flex-basis: calc(96.9% / 2);
  }
  @media (max-width: 823px) {
    flex-basis: calc(95.5% / 2);
  }
  @media (max-width: 600px) {
    flex-basis: calc(100% / 1);
  }
`;

export const CardModal = styled(CardImage)``;

export const LockBody = createGlobalStyle`
 body{
     overflow: hidden;
 }
`;
