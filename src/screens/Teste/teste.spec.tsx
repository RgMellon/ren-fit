import React from "react";
import { render } from "../../utils/test.utils2";

import { Teste } from ".";

import { ThemeProvider } from "styled-components/native";
import theme from "../../global/styles/theme";

// const Providers: React.FC = ({ children }) => (
//   <ThemeProvider theme={theme}>{children}</ThemeProvider>
// );

describe("Teste", () => {
  it("should be show ther correctly in input user name placeholder", () => {
    const { getByPlaceholderText } = render(<Teste />);
    const inputName = getByPlaceholderText("Nome");

    expect(inputName).toBeTruthy();
  });
});
