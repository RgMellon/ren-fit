import React from "react";
import { StepCount } from "../../components/StepCount";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <StepCount amountSteps="3000" />
    </S.Container>
  );
}