import styled from "styled-components";

export const MainContainer = styled.section`
  margin-top: 99px;
  display: flex;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 900;
`;

export const Img = styled.div`
  background-color: blue;
  background-image: url(${(props) => props.color});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 190px;
  height: 270px;
  border-radius: 4px;
  margin: 0 40px 0 0;
  @media screen (max-width: 79em) {
    width: 144px;
    height: 211px;
  }
`;
