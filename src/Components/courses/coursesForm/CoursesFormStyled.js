import styled from "styled-components";

export const CourseFormContainer = styled.form`
  display: flex;
  flex-direction: column;
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
    &:hover {
      background-color: ${({ theme }) => theme.colors.active};
      cursor: pointer;
    }
    &:hover .courseFormAvatarIcon {
      fill: ${({ theme }) => theme.colors.primary};
    }
    .courseFormAvatarIcon {
      width: 30px;
      height: 30px;
      fill: ${({ theme }) => theme.colors.main};
    }
  }
  .courseFormAvatarInput {
    display: none;
  }
`;
