import styled from "styled-components/macro";

export const SliderHolder = styled.div`
  width: 55%;
  margin: auto;
  position: relative;
  @media (max-width: 912px) {
    width: 92%;
  }
  @media (max-width: 600px) {
    width: 98%;
  }
  /* @media (max-width: 1051px) {
    width: %
  } */
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 24px;
  .react-multi-carousel-list {
    position: static;
    border-radius: 24px;
    width: 100%;

    @media not all and (min-resolution: 0.001dpcm) {
      @supports (-webkit-appearance: none) {
        perspective: 1px;
        overflow: hidden;
      }
    }
  }

  .react-multi-carousel-dot-list {
    position: absolute;
    top: 90%;
    left: 70%;
    display: flex;
    justify-content: center;
    width: auto;
    @media (max-width: 659px) {
      left: 60%;
    }
    @media (max-width: 491px) {
      left: 55%;
    }
    @media (max-width: 402px) {
      left: 45%;
    }
    @media (max-width: 379px) {
      left: 38%;
    }
    @media (max-width: 297px) {
      left: 20%;
    }
  }
`;

export const Image = styled.div``;

export const cardImage = styled.div``;
