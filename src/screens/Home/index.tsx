import React from "react";

import { SimpleCard } from "../../components/SimpleCard";
import { Header } from "../../components/Header";
import { StepCount } from "../../components/StepCount";
import { CardWithChart, Props } from "../../components/CardWithChart";

import * as S from "./styles";

const mockChartCard = [
  {
    title: "Passos",
    subtitle: "Últimos 7 dias",
    chartColor: "primary",
  },
  {
    title: "Calorias",
    subtitle: "Últimos 7 dias",
    chartColor: "highlight",
  },
] as Props[];

export function Home() {
  return (
    <S.Container>
      <Header />
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
