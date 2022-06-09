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
  flex: 0 0 calc(94.5% / 4);
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.12);
  border-radius: 16px;
  background: url(${({ src }) => src}) center / cover no-repeat;
  @media (max-width: 1422px) {
    flex: 0 0 calc(74% / 4);
  }
  @media (max-width: 1390px) {
    flex: 0 0 calc(71% / 4);
  }
  @media (max-width: 600px) {
    flex: 0 0 calc(100% / 1);
  }
`;

export const CardModal = styled(CardImage)``;

export const LockBody = createGlobalStyle`
 body{
     overflow: hidden;
 }
`;
