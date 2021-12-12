import React from "react";
import { render } from "@testing-library/react-native";

import { Teste } from "../../screens/Teste";

describe("Profile", () => {
  it("should be show ther correctly in input user name placeholder", () => {
    const { getByPlaceholderText } = render(<Teste />);
    const inputName = getByPlaceholderText("Nome");

    expect(inputName).toBeTruthy();
  });
});
