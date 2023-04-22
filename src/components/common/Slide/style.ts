import styled, { keyframes } from "styled-components";
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

const load = keyframes`
 to {
    background-position: 315px 0, 0 0, 0 190px, 50px 195px;
  }
`;

export const Project = styled(motion.div)`
  width: 100%;
  height: 19.5vw;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  background: linear-gradient(
    120deg,
    #e5e5e5 30%,
    #f0f0f0 38%,
    #f0f0f0 40%,
    #e5e5e5 48%
  );
  animation: ${load} 1s infinite;
  &:hover {
    .img {
      filter: brightness(0.5);
    }
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
  height: 1vw;
  border-radius: 3px;
  font-size: 0.9em;
  background-color: rgb(50, 48, 44);
  color: rgb(227, 226, 224);
  margin: 0px 6px 6px 0px;
  padding: 5px 6px;
  @media screen and (max-width: 47em) {
    display: none;
  }
`;

export const TagContainer = styled.div``;
