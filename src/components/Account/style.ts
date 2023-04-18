import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.0625vw;
`;

export const Text = styled.h1`
  color: white;
  font-size: 3.125vw;
  font-weight: 700;
`;

export const Profile = styled.div`
  background-color: white;
  width: 11.0938vw;
  height: 11.0938vw;
  border-radius: 50%;
  border: 0.46875vw solid rgb(42, 43, 44);
  overflow: hidden;
  background-image: url(${(props) => props.color});
  background-position: center;
  background-size: cover;
`;

export const UserName = styled.span`
  color: #adadad;
  font-size: 1.40625vw;
  font-weight: 400;
  margin-top: 0.8593750000000001vw;
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
