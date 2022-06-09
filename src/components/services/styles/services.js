import styled from "styled-components/macro";

export const Container = styled.section`
  display: flex;
  gap: 80px;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 50px auto;
  @media (max-width: 1072px) {
    flex-direction: column;
    gap: 26px;
    width: 92%;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 40px;
  width: 495px;
  border-radius: 24px;
  border: 1px solid rgba(34, 34, 34, 0.1);
  @media (max-width: 1072px) {
    width: 100%;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CardsHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
  margin-top: ${({ marginTop }) => marginTop};
  @media (max-width: 1072px) {
    margin-top: 0;
  } ;
`;

export const HeaderPage = styled.header`
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
`;

export const Description = styled.p`
  font-size: var(--desc-size);
  font-weight: 400;
  color: #8c8c8c;
  line-height: 1.2;
`;

export const CardTitle = styled.h4`
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
`;

// export const CardHolderMobileView = styled.div`

//  @
// `;
