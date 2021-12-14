import styled, { css } from "styled-components/native";

export const Container = styled.SafeAreaView`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    flex: 1;
    padding: 20px;
  `}
`;
