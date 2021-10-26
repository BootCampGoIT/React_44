import styled from "styled-components";

export const TutorFormContainer = styled.form`
  max-width: 300px;
  background-color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.main};
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .tutorFormAvatarLabel {
    width: 100px;
    height: 100px;
  }
  .tutorFormAvatarContainer {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid ${({ theme }) => theme.colors.main};
  }
  .tutorFormAvatarIcon {
    width: 30px;
    height: 30px;
    fill: ${({ theme }) => theme.colors.main};
  }
  .tutorFormAvatarImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .tutorFormAvatarInput {
    display: none;
  }
  .tutorFormSubmitButton {
    margin-top: 10px;
  }
`;
