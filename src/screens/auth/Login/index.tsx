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

  async function googleLogin() {
    try {
      signInWithGoogle();
      // const CLIENT_ID =
      //   "757452525938-6b8pismrpfocl340o9k2tq9fqab5tq36.apps.googleusercontent.com";
      // const REDIRECT_URI = "https://auth.expo.io/@rgmellon/ren-fit";
      // const RESPONSE_TYPE = "token";
      // const SCOPE = encodeURI(
      //   "https://www.googleapis.com/auth/fitness.sleep.read https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.location.read https://www.googleapis.com/auth/fitness.blood_pressure.write profile email"
      // );

      // const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      // const { params } = (await AuthSession.startAsync({
      //   authUrl,
      // })) as AuthResponse;

      // await getGoogleFitData(params.access_token);
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
        <S.Button onPress={googleLogin}>
          <S.ButtonText>Entrar</S.ButtonText>
        </S.Button>
      </S.Bottom>
    </S.Container>
  );
}
