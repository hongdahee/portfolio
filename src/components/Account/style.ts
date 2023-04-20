import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3em;
`;

export const Text = styled.h1`
  color: white;
  font-size: 3em;
  font-weight: 700;
  @media screen and (max-width: 47em) {
    font-size: 1.8em;
  }
`;

export const Profile = styled.div`
  background-color: white;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  border: 0.3em solid rgb(42, 43, 44);
  overflow: hidden;
  background-image: url(${(props) => props.color});
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 47em) {
    width: 7em;
    height: 7em;
  }
`;

export const UserName = styled.span`
  color: #adadad;
  font-size: 1.5em;
  font-weight: 400;
  margin-top: 1.5em;
  @media screen and (max-width: 47em) {
    font-size: 1em;
    margin-top: 1.5em;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
