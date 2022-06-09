import styled from "styled-components/macro";
export const Container = styled.section`
  padding-bottom: 80px;
`;

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const Card = styled.div`
  position: relative;
  height: 290px;
  border-radius: 16px;
  margin-right: 24px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, hsl(0, 0%, 0%) 100%),
    url(${({ src }) => src}) center / cover no-repeat;
`;

export const Frame = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  padding: 16px;
`;

export const CourseName = styled.span`
  font-size: var(--link-size);
  font-weight: 600;
  color: white;
`;

export const TrainingCourses = styled.p`
  font-size: var(--small-size);
  font-weight: 500;
  color: #a8a8a8;
`;

export const SliderHolder = styled.div`
  cursor: ${({ cursor }) => cursor};
`;
