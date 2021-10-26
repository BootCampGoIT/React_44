import styled from "styled-components";

export const ListItemContainer = styled.li`
  width: 50%;
  height: 250px;
  padding: 5px;
  .tutorListItemContainer {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 16px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: all 300ms linear;
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.main};
      cursor: pointer;
    }
  }
  .tutorListItemAvatarContainer {
    border-radius: 16px;
    overflow: hidden;
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tutorListItemAvatar {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .tutorListItemDefaultAvatar {
    width: 100px;
    height: 100px;
    fill: ${({ theme }) => theme.colors.main};
  }
  .tutorListItemName {
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    margin: 10px 0;
  }
  @media (min-width: 768px) {
    width: 25%;
    height: 250px;
  }
  @media (min-width: 1024px) {
    width: 20%;
    height: 250px;
  }
`;
