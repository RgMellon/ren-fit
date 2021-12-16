import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { useTheme } from "styled-components";
import * as S from "./styles";

type SimpleCardProps = {
  title: string;
  icon?: string;
  value: string;
};

export function SimpleCard({ title, icon, value }: SimpleCardProps) {
  // const theme = useTheme();

  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
        <FontAwesome5
          testID="icon-card"
          name={icon}
          size={14}
          color="#ff8354"
        />
      </S.Header>

      <S.Content>
        <S.Value>{value}</S.Value>
        <S.Info>Kcal</S.Info>
      </S.Content>
    </S.Container>
  );
}
