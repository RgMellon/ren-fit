import React from "react";

import LottieView from "lottie-react-native";

import runAnimation from "./runin2.json";

import * as S from "./styles";

export function Login() {
  return (
    <S.Container>
      <S.Content>
        <S.WrapperIcon>
          <S.IconContent>
            <LottieView autoPlay source={runAnimation} loop />
          </S.IconContent>
        </S.WrapperIcon>

        <S.Title>RenFit</S.Title>
        <S.SubTitle>Seus dados em um único lugar</S.SubTitle>
      </S.Content>

      <S.Bottom>
        <S.Button>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.Button>
      </S.Bottom>
    </S.Container>
  );
}
