import styled from "styled-components";

export const CourseFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid ${({ theme }) => theme.colors.main};
  border-radius: 16px;
  padding: 10px;

  .courseFormAvatarLabel {
    width: 100px;
    height: 100px;
    border: 1px solid ${({ theme }) => theme.colors.main};
    border-radius: 16px;
    transition: all 300ms linear;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    color: ${({ theme }) => theme.colors.primary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.active};
      cursor: pointer;
    }
    &:hover .courseFormAvatarIcon {
      fill: currentColor;
    }
    .courseFormAvatarIcon {
      width: 40px;
      height: 40px;
      fill: ${({ theme }) => theme.colors.main};
    }
  }
  .courseFormAvatarInput {
    display: none;
  }
`;
