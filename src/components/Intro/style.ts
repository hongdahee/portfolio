import styled from "styled-components";

export const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 190px;
  height: 270px;
  border-radius: 4px;
  @media screen and (max-width: 79em) {
    min-width: 160px;
    height: 240px;
  }
`;

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  gap: 60px;
  @media screen and (max-width: 60em) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  line-height: 1.8em;
  font-size: 1em;
  font-weight: 300;
  h1 {
    font-size: 1.2em;
    font-weight: 500;
    margin-bottom: 10px;
  }
`;

export const Container = styled.div`
  padding: 0 5vw;
`;

export const ContactContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  @media screen and (max-width: 459px) {
    flex-direction: column;
  }
`;

export const ContactTitle = styled.div`
  font-size: 1.1em;
`;

export const Contact = styled.div`
  font-size: 1.1em;
`;
