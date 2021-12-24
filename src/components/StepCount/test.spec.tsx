import React from "react";

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

    const goal = getByText(/6000/);

    expect(goal).toBeTruthy();
  });

  it("Should render the right percentagem", () => {
    const { getByText } = renderWithTeme(<StepCount amountSteps="3000" />);

    const percentageSteps = getByText(/50%/);

    expect(percentageSteps).toBeTruthy();
  });

  it("Should render stepBar with the same percentage of steps", () => {
    const { getByTestId } = renderWithTeme(<StepCount amountSteps="3000" />);

    const progressBarValue = getByTestId(/progress-value/i);

    expect(progressBarValue.props.style[0].width).toEqual("50%");
  });
});
