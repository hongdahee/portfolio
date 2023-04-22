import styled from "styled-components";

export const SkeletonWrapper = styled.div`
  .skeleton_intro {
    min-width: 190px;
    height: 270px;
    border-radius: 4px;
    @media screen and (max-width: 79em) {
      min-width: 160px;
      height: 240px;
    }
  }
`;
