import React from "react";

import { useAuth } from "../../hooks/auth";

import * as S from "./style";

export function Header() {
  const { user } = useAuth();

  return (
    <S.Container>
      <S.Content>
        <S.Title>Suas Atividades</S.Title>
        <S.SubTitle>Olá Renan, esse é seu resumo</S.SubTitle>
      </S.Content>
      <S.Avatar source={{ uri: user.picture }} />
    </S.Container>
  );
}
