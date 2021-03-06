import styled, { css } from "styled-components/native";

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 50,
  },
})`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    flex: 1;
    padding: 20px;
    padding-bottom: 200px;
  `}
`;
