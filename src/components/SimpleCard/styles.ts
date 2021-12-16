import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 150px;
    border-radius: 20px;
    border: 1px;
    border-color: ${theme.colors.detail};
    padding: 15px;
  `}
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
  `}
`;

export const Content = styled.View`
  margin-top: 40px;
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
  `}
`;

export const Info = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: 12px;
    color: ${theme.colors.detail};
  `}
`;
