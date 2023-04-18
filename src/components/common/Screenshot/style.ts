import { motion } from "framer-motion";
import styled from "styled-components";

export const TabContainer = styled.div`
  display: grid;
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  gap: 3vh;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 79em) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 47em) {
    grid-template-columns: repeat(1, 1fr);
    margin-left: 40px;
    margin-right: 40px;
    gap: 4vh;
  }
`;

export const ImgContainer = styled(motion.div)`
  width: 100%;
  height: 17vw;
  background-color: white;
  border-radius: 4px;
  background-image: url(${(props) => props.color});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  @media screen and (max-width: 79em) {
    height: 18vw;
  }
  @media screen and (max-width: 47em) {
    height: 40vw;
  }
`;

export const ScreenshotContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ImgName = styled.h2`
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: 400;
  @media screen and (max-width: 47em) {
    margin-top: 40px;
  }
`;
