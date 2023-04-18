import styled from "styled-components";

export const Img = styled.div`
  background-color: whitesmoke;
  background-image: url(${(props) => props.color});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 190px;
  height: 270px;
  border-radius: 4px;
  margin: 0 40px 0 0;
  @media screen and (max-width: 79em) {
    min-width: 160px;
    height: 240px;
  }
`;
