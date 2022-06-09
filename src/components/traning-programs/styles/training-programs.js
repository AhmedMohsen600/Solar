import styled from "styled-components/macro";

export const Container = styled.section`
  background-color: white;
  overflow-x: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 150px;
  @media (min-width: 1500px) {
    min-height: 50vh;
  }
`;

export const Inner = styled.div`
  display: flex;
  width: 89%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const ImageAcademy = styled.div`
  background: url(${({ src }) => `/images/${src}.svg`}) center / cover no-repeat;
  height: 900.5px;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: var(--container-width);
  margin: auto;
`;

export const LottieHolder = styled.div`
  height: 100%;
  @media (max-width: 600px) {
    height: 300px;
  }

  @media (max-width: 400px) {
    height: 250px;
  }
  @media (max-width: 320px) {
    height: 230px;
  }
  @media (max-width: 290px) {
    height: 190px;
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 8px;
  padding-left: 60px;
  @media (max-width: 600px) {
    padding-left: 0;
  }
`;
