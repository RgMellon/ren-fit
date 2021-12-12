import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

import * as AuthSession from "expo-auth-session";
import { getGoogleFitData } from "./src/services/google.fit";

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
};

export default function App() {
  async function googleLogin() {
    try {
      const CLIENT_ID =
        "757452525938-6b8pismrpfocl340o9k2tq9fqab5tq36.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@rgmellon/ren-fit";
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI(
        "https://www.googleapis.com/auth/fitness.sleep.read https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.location.read https://www.googleapis.com/auth/fitness.blood_pressure.write profile email"
      );

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthResponse;

      await getGoogleFitData(params.access_token);
    } catch (err) {
      Alert.alert("error");
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={googleLogin}>
        <Text>google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
