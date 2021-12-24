import React from "react";

import { SimpleCard } from "../../components/SimpleCard";
import { Header } from "../../components/Header";
import { StepCount } from "../../components/StepCount";
import { CardWithChart, Props } from "../../components/CardWithChart";

import * as S from "./styles";
import { Today } from "./Today";

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

      <Today />

      <CardWithChart data={mockChartCard[0]} />

      <CardWithChart data={mockChartCard[1]} />
    </S.Container>
  );
}
