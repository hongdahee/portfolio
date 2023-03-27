import styled from "styled-components";

export const CategoryBtn = styled.button`
  background: rgb(0, 0, 0);
  color: rgb(132, 134, 141);
  font-size: 15px;
  font-weight: 500;
  padding: 8px 16px;
  border: 2px solid rgb(46, 47, 49);
  border-radius: 24px;
  line-height: 20px;
  &.active {
    background: rgb(255, 255, 255);
    color: rgb(0, 0, 0);
  }
`;
