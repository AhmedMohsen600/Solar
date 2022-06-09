import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

export const PageName = styled.h1`
  position: relative;
  font-size: var(--title-size);
  font-weight: 700;
  color: var(--color-black);
`;

export const Inner = styled(Container)`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 77%;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 600px) {
    width: 92%;
  } ;
`;

export const FormBase = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1 1 30rem;
  gap: 24px;
  padding: 40px;
  border-radius: 24px;
  background-color: var(--color-hover);
  @media (max-width: 600px) {
    padding: 24px;
  }
`;

export const ContactInfo = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  flex: 1 1 30rem;
  background-color: ${({ bgColor }) => bgColor};
  padding: 40px;
  border-radius: 24px;
  overflow: hidden;
  gap: 60px;
  @media (max-width: 600px) {
    padding: 24px;
  }
`;

export const CircleGroup = styled.div`
  position: absolute;
  bottom: -8.5%;
  right: -7%;
`;

export const BigCircle = styled.div`
  position: relative;
  width: 207px;
  height: 207px;
  border-radius: 200px;
  background-color: rgba(247, 247, 247, 0.67);
`;

export const SmallCircle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 84px;
  height: 84px;
  border-radius: 200px;
  background-color: #e8e8e8;
`;

export const InfoGroup = styled.div`
  display: flex;
  gap: 8px;
  align-items: ${({ alignItems }) => alignItems};
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ gap }) => gap};
  padding: ${({ padding }) => padding};
  align-items: ${({ alignItems }) => alignItems};
  .social-group {
    display: flex;
    gap: 16px;
    margin-top: 24px;
    @media (max-width: 372px) {
      flex-direction: column;
      margin-top: 16px;
    }
    .maps {
      font-size: 14px;
      color: white;
    }
  }
  @media (max-width: 600px) {
    width: ${({ width }) => width};
    margin: 0 ${({ marginLR }) => marginLR};
  }
`;

export const SocialTitle = styled.span`
  font-size: var(--small-size);
  font-weight: 400;
  line-height: 1.2;
  color: ${({ color }) => color};
`;

export const SocialContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 16px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 8px;
  width: ${({ width }) => width};
`;

export const Title = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ color }) => color};
`;

export const Desc = styled.p`
  font-size: var(--link-size);
  font-weight: 400;
  color: ${({ color }) => color};
  max-width: ${({ maxWidth }) => maxWidth};
`;

export const SocialMediaLinks = styled.div`
  display: flex;
  gap: 8px;
`;

export const SubmitBtn = styled.button`
  color: ${({ color }) => color};
  font-size: var(--link-size);
  font-weight: 550;
  border-radius: 4px;
  background-color: ${({ bgColor }) => bgColor};
  border: 0;
  padding: 13px 16px;
  cursor: pointer;
  transition: all 0.4s;
  align-self: ${({ self }) => self};
  &:hover {
    background-color: ${({ bgHover }) => bgHover};
    color: ${({ colHover }) => colHover};
  }
`;

export const Input = styled.input`
  background-color: rgb(255, 255, 255);
  caret-color: rgb(51, 51, 51);
  border: 0;
  font-size: var(--small-size);
  padding: 16px;
  border-radius: 8px;
  color: rgb(51, 51, 51);
  width: 100%;
  &::placeholder {
    color: rgb(204, 204, 204);
  }
  &:focus {
    outline: 1px solid rgb(2, 115, 133);
  }
`;
export const Label = styled.label`
  font-size: var(--link-size);
  font-weight: 400;
  color: #3b3b3b;
`;

export const TextArea = styled.textarea`
  background-color: rgb(255, 255, 255);
  caret-color: rgb(51, 51, 51);
  width: 100%;
  border: 0;
  font-size: var(--small-size);
  padding: 16px;
  border-radius: 8px;
  color: rgb(51, 51, 51);
  &::placeholder {
    color: rgb(204, 204, 204);
  }
  &:focus {
    outline: 1px solid rgb(2, 115, 133);
  }
  resize: none;
`;

export const Text = styled.p`
  font-size: var(--desc-size);
  color: #bababa;
  font-weight: 400;
  text-align: center;
`;

export const Branches = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-radius: 16px;
  border: 1px solid rgba(1, 51, 101, 0.1);
  padding: 40px;
  background-color: #fcfcfc;
  width: 100%;
  gap: 16px;
`;

export const CityGroup = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const AcademyBranches = styled.h4`
  font-weight: 700;
  font-size: 2rem;
  line-height: 1.2;
  color: var(--secondry-color);
`;

export const City = styled.li`
  font-size: var(--link-size);
  color: black;
  line-height: 1.2;
  color: var(--color-black);
`;

export const BranchGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const GoogleMap = styled.a`
  font-size: 14px;
  color: white;
  padding-left: 27px;
`;
