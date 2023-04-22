import styled from "styled-components";

export const SkeletonWrapper = styled.div`
  width: 10em;
  height: 10em;
  border-radius: 50%;
  @media screen and (max-width: 47em) {
    width: 7em;
    height: 7em;
  }
  .profile-skeleton {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
