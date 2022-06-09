import styled from "styled-components/macro";

export const Container = styled.section`
  background-color: var(--color-hover);
  display: flex;
  padding: 50px 0;
  @media (min-width: 1500px) {
    min-height: 50vh;
  }
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 82%;
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    width: var(--container-width);
    height: 900px;
  }
`;

export const ImagesGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  width: ${({ width }) => width};
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const BankImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px;
  object-fit: cover;
`;

export const BigImage = styled.div`
  background: url(${({ src }) => src}) center / contain no-repeat;
  height: 392px;
  flex: 1;
  @media (max-width: 900px) {
    width: 100%;
    /* flex: auto; */
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  flex: ${({ flex }) => flex};
`;
