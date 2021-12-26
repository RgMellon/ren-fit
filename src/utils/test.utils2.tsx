import { render, RenderOptions } from "@testing-library/react-native";
import {
  AuthContextDefaultValues,
  AuthContextData,
  AuthContext,
} from "../hooks/auth";

import React, { ReactElement } from "react";

import { ThemeProvider } from "styled-components/native";
import theme from "../global/styles/theme";

type customRenderProps = {
  authContextProps?: AuthContextData;
} & Omit<RenderOptions, "queries">;

const customRender = (
  ui: ReactElement,
  {
    authContextProps = AuthContextDefaultValues,
    ...renderOptions
  }: customRenderProps = {}
) =>
  render(
    <ThemeProvider theme={theme}>
      <AuthContext.Provider value={authContextProps}>{ui}</AuthContext.Provider>
    </ThemeProvider>,
    renderOptions
  );

export * from "@testing-library/react-native";
export { customRender as render };
