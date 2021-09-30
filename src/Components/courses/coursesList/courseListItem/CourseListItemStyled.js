import styled from "styled-components";

export const CourseListItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 200px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 16px;
  padding: 10px;
  .courseListItemStatus {
    flex-grow: 1;
    color: ${(props) =>
      props.isActive ? props.theme.colors.attention : props.theme.colors.main};
  }
  .courseDetails {
  }
`;
