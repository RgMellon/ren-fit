import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { useTheme } from "styled-components";
import * as S from "./styles";

type SimpleCardProps = {
  title: string;
  icon?: string;
  value: string;
  colorIcon?: string;
  sufix: string;
};

export function SimpleCard({
  title,
  icon,
  value,
  colorIcon = "#ff8354",
  sufix,
}: SimpleCardProps) {
  // const theme = useTheme();

  return (
    <S.Container>
      <S.Header>
        <S.Title>{title}</S.Title>
        <FontAwesome5
          testID="icon-card"
          name={icon}
          size={14}
          color={colorIcon}
        />
      </S.Header>

      <S.Content>
        <S.Value>{value}</S.Value>
        <S.Info>{sufix}</S.Info>
      </S.Content>
    </S.Container>
  );
}
