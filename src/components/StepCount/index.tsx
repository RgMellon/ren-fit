import React from "react";

import * as S from "./styles";

type StepCountProps = {
  amountSteps: string;
};

const GOAL = 6000;

export function StepCount({ amountSteps }: StepCountProps) {
  const progressValue = (Number(amountSteps) / GOAL) * 100;

  return (
    <S.Container>
      <S.LeftContent>
        <S.Title>Passos</S.Title>

        <S.ContentStepData>
          <S.AmountStepsUntilNow>{amountSteps}</S.AmountStepsUntilNow>
          <S.StepsGoal>/{GOAL}</S.StepsGoal>
        </S.ContentStepData>
      </S.LeftContent>

      <S.ContentRight>
        <S.AmountStepsUntilNow>{progressValue}%</S.AmountStepsUntilNow>
        <S.ProgressBar>
          <S.ProgressBarValue progressValue={progressValue} />
        </S.ProgressBar>
      </S.ContentRight>
    </S.Container>
  );
}
