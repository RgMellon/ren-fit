import React from "react";
import { SimpleCard } from "../../components/SimpleCard";
import { StepCount } from "../../components/StepCount";
import { CardWithChart } from "../../components/CardWithChart";

import * as S from "./styles";
import { Dimensions } from "react-native";

const mockChartCard = [
  {
    title: "Passos",
    subtitle: "Últimos 7 dias",
    chartColor: [255, 131, 84],
  },
  {
    title: "Calorias",
    subtitle: "Últimos 7 dias",
    chartColor: [81, 66, 171],
  },
];

export function Home() {
  return (
    <S.Container>
      <StepCount amountSteps="3000" />

      <S.Wrapper>
        <S.ContentCard>
          <SimpleCard
            title="Calorias"
            icon="burn"
            value={"450.75"}
            sufix="Kcal"
          />
        </S.ContentCard>

        <S.ContentCard>
          <SimpleCard
            title="Distancia"
            icon="walking"
            colorIcon="#5142ab"
            value={"450.75"}
            sufix="KM"
          />
        </S.ContentCard>
      </S.Wrapper>

      <CardWithChart data={mockChartCard[0]} />

      <CardWithChart data={mockChartCard[1]} />
    </S.Container>
  );
}
