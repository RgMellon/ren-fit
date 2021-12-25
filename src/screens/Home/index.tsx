import React from "react";

import { Header } from "../../components/Header";

import { Today } from "./Today";
import { LastWeek } from "./LastWeek";

import * as S from "./styles";

export function Home() {
  return (
    <S.Container>
      <Header />
      <Today />
      <LastWeek />
    </S.Container>
  );
}
