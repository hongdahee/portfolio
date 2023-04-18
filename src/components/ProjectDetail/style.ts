import styled from "styled-components";

export const MainContainer = styled.section`
  margin-top: 99px;
  display: flex;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 900;
  margin-bottom: 20px;
`;

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

export const InfoContainer = styled.div`
  padding-top: 80px;
`;

export const InfoText = styled.h3`
  color: rgb(186, 186, 193);
  font-size: 15px;
  font-weight: 400;
  margin-top: 20px;
  line-height: 1.5em;
`;

export const LinkContainer = styled.section`
  border-top: 1px solid rgb(27, 28, 29);
  border-bottom: 1px solid rgb(27, 28, 29);
  padding: 40px 0;
  display: flex;
  align-items: center;
`;

export const LinkFlex = styled.div`
  display: flex;
  align-items: center;
`;

export const LinkBtn = styled.span`
  margin-right: 25px;
`;

export const ContentContainer = styled.section``;

export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Tab = styled.div`
  font-size: 16px;
  font-weight: 500;
  padding: 18px 24px;
  cursor: pointer;
  color: rgb(79, 81, 82);
  &.active {
    color: rgb(255, 255, 255);
    border-bottom: 2.5px solid white;
  }
`;
