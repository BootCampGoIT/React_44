import styled from "styled-components";

export const AddItemContainer = styled.li`
  width: 50%;
  height: 250px;
  padding: 5px;
  .addItemContainer {
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 16px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 300ms linear;
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.main};
      cursor: pointer;
    }
  }
  .addItemIcon {
    width: 40px;
    height: 40px;
    fill: ${({ theme }) => theme.colors.main};
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
