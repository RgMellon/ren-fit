import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;

    justify-content: center;
    align-items: center;

    background-color: ${theme.colors.background};

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;

    z-index: 10;
  `}
`;
