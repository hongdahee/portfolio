import styled from "styled-components";
import { motion } from "framer-motion";

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  margin-bottom: 5px;
`;

export const Slider = styled.div`
  position: relative;
  display: flex;
  height: 19.5vw;
  overflow-x: hidden;
  margin-bottom: 2.5vw;
`;

export const Row = styled(motion.div)`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  position: absolute;
`;

export const Project = styled(motion.div)`
  width: 100%;
  height: 19.5vw;
  border-radius: 4px;
  background-image: url(${(props) => props.color});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${(props) => props.color});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    div {
      display: block;
    }
  }
`;

export const SliderBtn = styled.div`
  color: rgb(186, 186, 193);
  font-size: 35px;
  position: absolute;
  top: 42%;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0.3%;
  cursor: pointer;
  &.left {
    left: 0.3%;
  }
`;

export const ProjectTitle = styled.h2`
  color: rgb(255, 255, 255);
  font-size: 1.8vw;
  font-weight: 700;
  white-space: pre-wrap;
  margin-bottom: 1.5vw;
`;

export const ProjectDetail = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  z-index: 3;
  width: 100%;
  display: none;
  padding-bottom: 4vw;
  padding-left: 2vw;
`;

export const ProjectTag = styled.span`
  height: 20px;
  border-radius: 3px;
  font-size: 1vw;
  background-color: rgb(50, 48, 44);
  color: rgb(227, 226, 224);
  margin: 0px 6px 6px 0px;
  padding: 5px 6px;
`;
