import styled from "styled-components";

export const Container = styled.div`
  height: 5em;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: #141517;
  z-index: 3;
  display: flex;
  align-items: center;
  @media screen and (min-width: 47em) {
    display: none;
  }
`;

export const Menu = styled.div`
  font-weight: 300;
  padding: 12px 8px;
  color: #d4d7db;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
  &.active {
    border-radius: 10px;
    color: white;
    background-color: #303133;
  }
`;
