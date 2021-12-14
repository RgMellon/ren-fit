import React from "react";
import { render } from "@testing-library/react-native";

import { renderWithTeme } from "../../utils/test.utils";

import { StepCount } from ".";

describe("StepCount", () => {
  it("should render the label Passos", () => {
    const { getByText } = renderWithTeme(<StepCount amountSteps="3" />);

    const label = getByText("Passos");

    expect(label.props.children).toBeTruthy();
  });

  it("Should render the amount steps when passing to params", () => {
    const { getByText } = renderWithTeme(<StepCount amountSteps="4" />);

    const amountSteps = getByText("4");

    expect(amountSteps).toBeTruthy();
  });

  it("Should render the goal of the steps", () => {
    const { getByText } = renderWithTeme(<StepCount amountSteps="4" />);

    const goal = getByText("6000");

    expect(goal).toBeTruthy();
  });

  it("Should render the right percentagem and width of progress value", () => {
    const { getByText } = renderWithTeme(<StepCount amountSteps="3000" />);

    const percentageSteps = getByText("50%");

    expect(percentageSteps).toBeTruthy();
  });
});
