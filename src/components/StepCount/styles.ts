import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    border: 1px;
    border-color: ${theme.colors.detail};
    width: 100%;
    height: 90px;
    padding: 10px;
    border-radius: 8px;

    flex-direction: row;
    align-items: center;

    margin-top: 20px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.medium};
  `}
`;

export const LeftContent = styled.View`
  width: 40%;
`;

export const AmountStepsUntilNow = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    color: ${theme.colors.text};
    font-family: ${theme.fonts.regular};
  `}
`;

export const StepsGoal = styled.Text`
  ${({ theme }) => css`
    font-size: 12px;
    color: ${theme.colors.primary};
    font-family: ${theme.fonts.regular};
    /* margin-top: 8px; */
  `}
`;

export const ContentStepData = styled.View`
  flex-direction: row;
`;

export const ContentRight = styled.View`
  width: 60%;
  height: 100%;

  justify-content: center;
  align-items: flex-end;
`;

export const ProgressBar = styled.View`
  ${({ theme }) => css`
    width: 60%;
    background-color: ${theme.colors.detail};
    height: 10px;
    border-radius: 8px;
  `}
`;

type ProgressValueType = {
  progressValue: string;
};

export const ProgressBarValue = styled.View<ProgressValueType>`
  ${({ theme, progressValue }) => css`
    background-color: ${theme.colors.primary};
    height: 10px;
    border-radius: 8px;
    width: ${progressValue}%;
  `}
`;
