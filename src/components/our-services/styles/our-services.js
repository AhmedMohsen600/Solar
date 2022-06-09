import styled from "styled-components/macro";

export const Container = styled.section`
  min-height: 66vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
  @media (min-width: 1500px) {
    min-height: 50vh;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Frame = styled.div`
  background: url("/images/banks/sea.png") center / contain no-repeat;
  width: 90%;
  height: 220px;
`;
