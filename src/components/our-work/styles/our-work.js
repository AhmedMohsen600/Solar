import styled from "styled-components/macro";

export const Container = styled.section`
  display: flex;
  background-color: var(--color-hover);
  padding: 60px 0;
  @media (min-width: 1500px) {
    min-height: 50vh;
  }
  @media (min-width: 2000px) {
    min-height: 40vh;
  }
`;

export const Inner = styled.div`
  width: 85%;
  margin: auto;
  display: flex;
  align-items: center;
  flex-direction: ${({ direction }) => direction};
  gap: 109px;
  @media (max-width: 912px) {
    flex-direction: column-reverse;
    gap: 24px;
  }
  .koko {
    width: 50%;
  }
`;

export const ImageHolder = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, hsl(0, 0%, 0%) 100%),
    url(${({ src }) => src}) center / cover no-repeat;
  width: 100%;
  height: 450px;
`;
