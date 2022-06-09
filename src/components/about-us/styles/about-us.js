import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const CardsHolder = styled.section`
  display: flex;
  gap: 24px;
  width: var(--container-width);
  flex-wrap: wrap;
  padding: 63px 0;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 24px;
  flex: 1 1 25rem;
  height: 100%;
  background-color: var(--color-hover);
`;

export const CardTitle = styled.h3`
  font-size: var(--desc-size);
  color: var(--color-black);
  font-weight: 700;
`;

export const CardDesc = styled.p`
  font-size: var(--link-size);
  font-weight: 400;
  color: #636568;
`;

export const Round = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: var(--primary-color);
`;
