import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 60px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.colors.main};
  padding: 5px;

  .headerTitle {
    color: ${(props) => props.theme.colors.main};
  }
  .headerBlock {
    display: flex;
    align-items: center;
  }
  .headerBlockButton {
    background-color: transparent;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin-left: 10px;
    &:hover {
      background-color: ${(props) => props.theme.colors.secondary};
    }
  }
  .headerBlockIcon {
    width: 26px;
    height: 26px;
    fill: ${(props) => props.theme.colors.main};
  }
  .settingsWrapper {
    color: #000;
    background-color: white;
    border-radius: 16px;
    padding: 20px;
  }
  .headerMenuIcon{
    width: 26px;
    height: 26px;
    fill: ${(props) => props.theme.colors.main};
  }
  @media (min-width: 768px) {
    padding: 10px;
  }
  @media (min-width: 1024px) {
    padding: 10px;
  }
`;
