import React from "react";
import { SimpleCard } from "../../components/SimpleCard";
import { StepCount } from "../../components/StepCount";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <StepCount amountSteps="3000" />

      <S.Wrapper>
        <S.ContentCard>
          <SimpleCard title="Calorias" icon="burn" value={"450.75"} />
        </S.ContentCard>

        <S.ContentCard>
          <SimpleCard title="Distancia" icon="walking" value={"450.75"} />
        </S.ContentCard>
      </S.Wrapper>
    </S.Container>
  );
}
