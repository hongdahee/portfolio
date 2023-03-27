import styled from "styled-components";

export const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  background: #141517;
  width: 240px;
  height: 100%;
  border-right: 1px #1b1c1d solid;
  @media screen and (max-width: 47em) {
    display: none;
  }
`;

export const Logo = styled.h2`
  color: #ff045c;
  font-size: 26px;
  font-weight: 900;
  margin-top: 24px;
  margin-left: 26px;
  margin-bottom: 30px;
`;

export const MenuSection = styled.section`
  padding: 0 16px;
`;

export const MenuList = styled.ul``;

export const Menu = styled.li`
  font-weight: 300;
  padding: 12px 8px;
  color: #d4d7db;
  &:hover {
    color: white;
  }
  &.active {
    border-radius: 10px;
    color: white;
    background-color: #303133;
  }
`;
