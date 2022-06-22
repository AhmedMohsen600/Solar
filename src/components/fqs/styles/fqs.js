import styled from "styled-components/macro";

export const Container = styled.section`
  display: flex;
  width: var(--container-width);
  padding: 50px 0;
  margin: auto;
`;

export const Inner = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  border: 2px dashed var(--primary-color);
  border-radius: 16px;
  background-color: rgba(2, 115, 133, 0.1);
  padding: 40px;
  @media (max-width: 584px) {
    padding: 24px;
  }
`;

export const Title = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: var(--color-black);
`;

export const Group = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  gap: ${({ gap }) => gap};
  width: ${({ width }) => width};
  justify-content: ${({ justifyContent }) => justifyContent};
  @media (max-width: 953px) {
    flex-direction: column;
    gap: ${({ mob }) => mob};
  }
`;
