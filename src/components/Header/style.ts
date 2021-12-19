import styled, { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100px;
  margin-top: 20px;

  flex-direction: row;
  align-items: center;

  justify-content: space-between;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 23px;
    font-family: ${theme.fonts.bold};
  `}
`;

export const Avatar = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.detail}
    font-family: ${theme.fonts.regular};
    font-size: 14px;
  `}
`;

export const Content = styled.View`
  flex-direction: column;
`;
