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

type ChartProps = {
  day: string;
  amount: number;
};

const value = [
  {
    day: "D",
    amount: 100,
  },

  {
    day: "S",
    amount: 33,
  },
  {
    day: "T",
    amount: 1,
  },

  {
    day: "Q",
    amount: 11,
  },

  {
    day: "Q",
    amount: 2,
  },

  {
    day: "S",
    amount: 33,
  },

  {
    day: "S",
    amount: 33,
  },
] as ChartProps[];

describe("CardWithChat", () => {
  it("should render the title passed to params", () => {
    const { getByText } = renderWithTeme(
      <CardWithChart data={mockChartCard[0]} value={value} />
    );

    const title = getByText("Passos");

    expect(title.props.children).toBeTruthy();
  });

  it("should render the subtitle when passed to params", () => {
    const { getByText } = renderWithTeme(
      <CardWithChart data={mockChartCard[0]} value={value} />
    );

    const subtitle = getByText(/Últimos 7 dias/);

    expect(subtitle.props.children).toBeTruthy();
  });

  it("should render the primary color on chart", () => {
    const { getByTestId } = renderWithTeme(
      <CardWithChart data={mockChartCard[0]} value={value} />
    );

    const chart = getByTestId("chart");

    expect(chart.props.children.props.chartConfig.color()).toEqual(
      "rgba(81, 66, 171, 1)"
    );
  });

  it("should render the highlight color on chart", () => {
    const { getByTestId } = renderWithTeme(
      <CardWithChart data={mockChartCard[1]} value={value} />
    );

    const chart = getByTestId("chart");

    expect(chart.props.children.props.chartConfig.color()).toEqual(
      "rgba(255, 131, 84, 1)"
    );
  });
});
