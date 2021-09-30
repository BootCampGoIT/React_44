import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 60px;
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  align-items: center;
  padding: 0 40px;
  justify-content: space-between;

  .headerTitle {
    color: ${(props) => props.theme.colors.main};
  }
`;
