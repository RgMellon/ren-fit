import React from "react";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";

import {
  useFonts, // hook para usar as fonts
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import { Home } from "./src/screens/Home";

import theme from "./src/global/styles/theme";

import { Routes } from "./src/routes";
import AppProvider from "./src/hooks";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent />

      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
}
