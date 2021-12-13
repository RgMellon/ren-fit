import React from "react";

import { Text, View, TextInput, Button } from "react-native";

import * as S from "./styles";

export function Teste() {
  return (
    <S.Container>
      <Text>Teste</Text>
      <TextInput placeholder="Nome" autoCorrect={false} />
      <TextInput placeholder="SobreNome" />

      <Button title="Salva" onPress={() => {}} />
    </S.Container>
  );
}
