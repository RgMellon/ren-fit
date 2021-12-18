import React from "react";

import * as S from "./styles";

import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export type Props = {
  title: string;
  subtitle: string;
  chartColor: "primary" | "highlight";
};

export type CardWithChartProps = {
  data: Props;
};

const customizedLineChartModifier = {
  primary: (opacity: number) => `81, 66, 171, ${opacity}`,
  highlight: (opacity: number) => `255, 131, 84, ${opacity}`,
};

export function CardWithChart({ data }: CardWithChartProps) {
  return (
    <S.Container>
      <S.LeftSide>
        <S.Title>{data.title}</S.Title>
        <S.SubTitle>{data.subtitle}</S.SubTitle>
      </S.LeftSide>

      <S.RightSide testID="chart">
        <LineChart
          data={{
            labels: ["D", "S", "T", "Q", "Q", "S", "S"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            propsForBackgroundLines: {
              stroke: "#fff",
            },
            color: (opacity = 1) =>
              `rgba(${customizedLineChartModifier[data.chartColor](opacity)})`,
            labelColor: () => `#DEDBEF`,
            style: {
              borderRadius: 16,
            },
          }}
          width={Dimensions.get("window").width * 0.54}
          height={180}
          withOuterLines={false}
          withShadow={false}
          withHorizontalLabels={false}
          bezier
        />
      </S.RightSide>
    </S.Container>
  );
}
