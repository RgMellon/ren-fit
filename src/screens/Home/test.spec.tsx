import React from "react";

import { render } from "../../utils/test.utils2";

import { View } from "react-native";

import { Home } from ".";

jest.doMock("../../components/Header", () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <View testID="Mock Header" />;
    },
  };
});

describe("Home", () => {
  it("Should render Header", () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId("Mock Header")).toBeTruthy();
  });
});
