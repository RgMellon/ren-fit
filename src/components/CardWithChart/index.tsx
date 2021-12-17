import React from "react";

import * as S from "./styles";

import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

type CardWithChartProps = {
  data: {
    title: string;
    subtitle: string;
    chartColor: number[];
  };
};

export function CardWithChart({ data }: CardWithChartProps) {
  return (
    <S.Container>
      <S.LeftSide>
        <S.Title>{data.title}</S.Title>
        <S.SubTitle>{data.subtitle}</S.SubTitle>
      </S.LeftSide>

      <S.RightSide>
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
          width={Dimensions.get("window").width * 0.54}
          height={180}
          withOuterLines={false}
          withShadow={false}
          withHorizontalLabels={false}
          chartConfig={{
            backgroundColor: "#fff",
            backgroundGradientFrom: "#fff",
            backgroundGradientTo: "#fff",
            propsForBackgroundLines: {
              stroke: "#fff",
            },
            color: (opacity = 1) =>
              `rgba(${data.chartColor[0]}, ${data.chartColor[1]}, ${data.chartColor[2]}, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={{
            justifyContent: "center",

            paddingRight: 10,

            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </S.RightSide>
    </S.Container>
  );
}
