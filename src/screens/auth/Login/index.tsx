import React from "react";

import { Alert } from "react-native";
import LottieView from "lottie-react-native";

import runAnimation from "./runin2.json";

import * as AuthSession from "expo-auth-session";
import { getGoogleFitData } from "../../../services/google.fit";

import { useAuth } from "../../../hooks/auth";

import * as S from "./styles";

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
};

export function Login() {
  const { signInWithGoogle } = useAuth();

  async function handleGoogleSignIn() {
    try {
      signInWithGoogle();
    } catch (err) {
      console.log(err);
      Alert.alert("error");
    }
  }

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
        <S.Button onPress={handleGoogleSignIn}>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.Button>
      </S.Bottom>
    </S.Container>
  );
}
