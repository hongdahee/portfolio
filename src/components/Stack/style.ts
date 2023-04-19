import styled from "styled-components";

export const Logo = styled.div`
  background-image: url(${(props) => props.color});
  width: 5em;
  height: 5em;
  border-radius: 100%;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-bottom: 3em;
  @media screen and (max-width: 60em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Name = styled.span``;

export const LargeName = styled.span`
  font-size: 1.5em;
  font-weight: 500;
  margin-bottom: 10px;
`;
export const Description = styled.span`
  line-height: 1.8em;
  font-size: 1em;
  font-weight: 300;
  margin-bottom: 17px;
`;

export const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 2.5vw;
  &:hover {
    transform: scale(1.2);
    transition: all 0.2s linear;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3vw;
`;

export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
