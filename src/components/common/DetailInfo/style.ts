import styled from "styled-components";

export const TabContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 40px;
  margin-left: 20px;
  margin-right: 20px;
  @media screen and (max-width: 47em) {
    margin-left: 40px;
    margin-right: 40px;
  }
`;

export const Title = styled.h2`
  font-size: 2em;
`;

export const Content = styled.h3`
  font-size: 1.2em;
`;
