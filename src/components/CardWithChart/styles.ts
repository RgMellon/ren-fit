import styled, { css } from "styled-components/native";

import { LineChart } from "react-native-chart-kit";

export const Container = styled.View`
  ${({ theme }) => css`
    border-radius: 8px;
    width: 100%;
    height: 200px;

    border-radius: 20px;
    border: 1px;
    border-color: ${theme.colors.detail};
    padding: 15px;
    margin-top: 20px;

    flex-direction: row;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.medium};
  `}
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.fonts.regular};
    font-size: 12px;
    color: ${theme.colors.detail};
  `}
`;

export const LeftSide = styled.View`
  width: 35%;
`;

export const RightSide = styled.View`
  width: 65%;
  justify-content: center;
`;

export const CustomizedLineChart = styled(LineChart).attrs((props) => ({}))`
  justify-content: center;
  padding-right: 1px;
  border-radius: 16px;
`;
