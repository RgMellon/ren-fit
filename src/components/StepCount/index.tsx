import React from "react";

import * as S from "./styles";

type StepCountProps = {
  amountSteps: string;
};

const GOAL = 6000;

export function StepCount({ amountSteps }: StepCountProps) {
  const progressValue = ((Number(amountSteps) / GOAL) * 100).toFixed(2);

  return (
    <S.Container>
      <S.LeftContent>
        <S.Title>Passos</S.Title>

        <S.ContentStepData>
          <S.AmountStepsUntilNow>{amountSteps}</S.AmountStepsUntilNow>
          <S.StepsGoal> /6000</S.StepsGoal>
        </S.ContentStepData>
      </S.LeftContent>

      <S.ContentRight>
        <S.AmountStepsUntilNow>{progressValue}%</S.AmountStepsUntilNow>
        <S.ProgressBar>
          <S.ProgressBarValue
            testID="progress-value"
            progressValue={progressValue}
          />
        </S.ProgressBar>
      </S.ContentRight>
    </S.Container>
  );
}
