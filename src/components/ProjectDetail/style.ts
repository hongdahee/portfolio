import styled from "styled-components";

export const MainContainer = styled.section`
  margin-top: 80px;
  display: flex;
  margin-bottom: 40px;
  gap: 60px;
  @media screen and (max-width: 50em) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 190px;
  height: 270px;
  overflow: hidden;
  border-radius: 4px;
  background-color: whitesmoke;
  @media screen and (max-width: 79em) {
    width: 160px;
    height: 240px;
  }
  .img {
    object-fit: contain;
    @media screen and (max-width: 79em) {
      width: 160px;
      height: 240px;
    }
  }
`;

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 900;
  margin-bottom: 20px;
`;

export const InfoContainer = styled.div`
  @media screen and (max-width: 47em) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const InfoText = styled.h3`
  color: rgb(186, 186, 193);
  font-size: 15px;
  font-weight: 400;
  margin-top: 20px;
  line-height: 1.5em;
  width: 36vw;
  @media screen and (max-width: 47em) {
    width: 80%;
  }
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

export const ProjectTag = styled.span`
  height: 1vw;
  border-radius: 3px;
  font-size: 0.9em;
  background-color: rgb(50, 48, 44);
  color: rgb(227, 226, 224);
  margin: 0px 6px 6px 0px;
  padding: 5px 6px;
`;
