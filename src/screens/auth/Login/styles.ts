import styled, { css } from "styled-components/native";

import { lighten } from "polished";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background: ${theme.colors.background};
  `}
`;

export const Bottom = styled.View`
  ${({ theme }) => css`
    width: 100%;
    height: 20%;
    background: ${lighten(0.1, theme.colors.highlight)};
    padding: 20px;
    /* border-top-right-radius: 20px;
    border-top-left-radius: 20px; */
  `}
`;

export const Content = styled.View`
  ${({ theme }) => css`
    
     background: ${lighten(0.1, theme.colors.highlight)};
     
    height: 80%;
    align-items:center
    justify-content: center;
  `}
`;

export const WrapperIcon = styled.View`
  ${({ theme }) => css`
    width: 200px;
    height: 300px;
    background: ${theme.colors.highlight};
    border-radius: 100px;
    transform: rotate(30deg);

    align-items: center;
    justify-content: center;
  `}
`;

export const IconContent = styled.View`
  width: 200px;
  height: 300px;
  transform: rotate(-30deg);
`;

export const Button = styled.TouchableOpacity`
  ${({ theme }) => css`
    width: 100%;
    height: 50px;
    border-radius: 70px;
    background: ${lighten(0.3, theme.colors.highlight)};

    justify-content: center;
    align-items: center;
  `}
`;

export const ButtonText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.text};
    font-family: ${theme.fonts.regular};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-family: ${theme.fonts.bold};
    font-size: 40px;

    margin-top: 20px; ;
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.background};
    font-family: ${theme.fonts.regular};
    font-size: 14px;
  `}
`;
