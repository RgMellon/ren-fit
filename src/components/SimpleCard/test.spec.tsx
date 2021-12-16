import React from "react";
import { renderWithTeme } from "../../utils/test.utils";

import { SimpleCard } from ".";

jest.mock("@expo/vector-icons", () => ({
  FontAwesome5: "Icon",
}));

jest.mock("@expo/vector-icons/FontAwesome", () => "Icon");

describe("SimpleCard", () => {
  it("should render the title passed to params", () => {
    const { getByText } = renderWithTeme(
      <SimpleCard title="any_title" value="any_value" icon="burn" />
    );

    const title = getByText("any_title");

    expect(title.props.children).toBeTruthy();
  });

  it("shoul render the icon when passed to params", () => {
    const { getByTestId, debug } = renderWithTeme(
      <SimpleCard title="any_title" value="any_value" icon="burn" />
    );

    const icon = getByTestId(/icon-card/);

    expect(icon.props.name).toEqual("burn");
  });
  // it("Should render the amount steps when passing to params", () => {
  //   const { getByText } = renderWithTeme(<StepCount amountSteps="4" />);

  //   const amountSteps = getByText("4");

  //   expect(amountSteps).toBeTruthy();
  // });

  // it("Should render the goal of the steps", () => {
  //   const { getByText } = renderWithTeme(<StepCount amountSteps="4" />);

  //   const goal = getByText(/6000/);

  //   expect(goal).toBeTruthy();
  // });

  // it("Should render the right percentagem", () => {
  //   const { getByText } = renderWithTeme(<StepCount amountSteps="3000" />);

  //   const percentageSteps = getByText(/50%/);

  //   expect(percentageSteps).toBeTruthy();
  // });

  // it("Should render stepBar with the same percentage of steps", () => {
  //   const { getByTestId } = renderWithTeme(<StepCount amountSteps="3000" />);

  //   const progressBarValue = getByTestId(/progress-value/i);

  //   expect(progressBarValue.props.style[0].width).toEqual("50%");
  // });
});
