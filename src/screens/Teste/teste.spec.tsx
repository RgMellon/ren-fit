import React from "react";
import { render } from "@testing-library/react-native";

import { Teste } from ".";

import { ThemeProvider } from "styled-components/native";
import theme from "../../global/styles/theme";

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

describe("Teste", () => {
  it("should be show ther correctly in input user name placeholder", () => {
    const { getByPlaceholderText } = render(<Teste />, {
      wrapper: Providers,
    });
    const inputName = getByPlaceholderText("Nome");

    expect(inputName).toBeTruthy();
  });
});
