import styled from "styled-components/macro";

export const Container = styled.footer`
  padding: 40px 0;
  background-color: var(--primary-color);
`;

export const Row = styled.div`
  width: var(--container-width);
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  align-self: ${({ self }) => self};
`;

export const Break = styled.div`
  height: 119px;
  width: 1px;
  background-color: rgba(255, 255, 255, 0.05);
`;

export const Group = styled.div`
  display: flex;
  gap: ${({ gap }) => gap};
`;

export const Desc = styled.p`
  font-size: var(--small-size);
  color: var(--color-hover);
  font-weight: 400;
  max-width: ${({ maxWidth }) => maxWidth};
`;
