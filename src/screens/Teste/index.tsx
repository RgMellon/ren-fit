import React from "react";

import { Text, View, TextInput, Button } from "react-native";

export function Teste() {
  return (
    <View>
      <Text>Teste</Text>
      <TextInput placeholder="Nome" autoCorrect={false} />
      <TextInput placeholder="SobreNome" />

      <Button title="Salva" onPress={() => {}} />
    </View>
  );
}
