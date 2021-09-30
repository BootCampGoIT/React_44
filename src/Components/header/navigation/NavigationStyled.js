import styled from "styled-components";

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  .navigationList {
    display: flex;
    align-items: center;
  }
  .navigationListItem {
    color: ${(props) => props.theme.colors.main};
    font-weight: 700;
  }

  .navigationListItem:not(:last-child) {
    margin-right: 20px;
  }
  .navigationListLink {
    text-transform: uppercase;
    color: currentColor;
    &:hover {
      color: ${(props) => props.theme.colors.active};
    }
  }
`;
