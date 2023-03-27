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
  background-color: pink;
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
