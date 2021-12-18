import React from "react";
import { renderWithTeme } from "../../utils/test.utils";

import { CardWithChart, Props } from ".";

const mockChartCard = [
  {
    title: "Passos",
    subtitle: "Últimos 7 dias",
    chartColor: "primary",
  },
  {
    title: "Calorias",
    subtitle: "Últimos 7 dias",
    chartColor: "highlight",
  },
] as Props[];

describe("CardWithChat", () => {
  it("should render the title passed to params", () => {
    const { getByText } = renderWithTeme(
      <CardWithChart data={mockChartCard[0]} />
    );

    const title = getByText("Passos");

    expect(title.props.children).toBeTruthy();
  });

  it("should render the subtitle when passed to params", () => {
    const { getByText } = renderWithTeme(
      <CardWithChart data={mockChartCard[0]} />
    );

    const subtitle = getByText(/Últimos 7 dias/);

    expect(subtitle.props.children).toBeTruthy();
  });

  it("should render the primary color on chart", () => {
    const { getByTestId } = renderWithTeme(
      <CardWithChart data={mockChartCard[0]} />
    );

    const chart = getByTestId("chart");

    expect(chart.props.children.props.chartConfig.color()).toEqual(
      "rgba(81, 66, 171, 1)"
    );
  });

  it("should render the highlight color on chart", () => {
    const { getByTestId } = renderWithTeme(
      <CardWithChart data={mockChartCard[1]} />
    );

    const chart = getByTestId("chart");

    expect(chart.props.children.props.chartConfig.color()).toEqual(
      "rgba(255, 131, 84, 1)"
    );
  });
});
