import React from "react";

import * as S from "./styles";

import { Alert, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export type Props = {
  title: string;
  subtitle: string;
  chartColor: "primary" | "highlight";
};

type ChartProps = {
  day: string;
  amount: number;
};

export type CardWithChartProps = {
  data: Props;
  value: ChartProps[];
};

const customizedLineChartModifier = {
  primary: (opacity: number) => `81, 66, 171, ${opacity}`,
  highlight: (opacity: number) => `255, 131, 84, ${opacity}`,
};

export function CardWithChart({ data, value }: CardWithChartProps) {
  return (
    <S.Container>
      <S.LeftSide>
        <S.Title>{data.title}</S.Title>
        <S.SubTitle>{data.subtitle}</S.SubTitle>
      </S.LeftSide>

      <S.RightSide testID="chart">
        {!!value && value.length > 0 && (
          <LineChart
            data={{
              labels: [...value.map((chartValue) => chartValue.day)],
              datasets: [
                {
                  data: value.map((chartValue) =>
                    Number(chartValue.amount.toFixed(2))
                  ),
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
                `rgba(${customizedLineChartModifier[data.chartColor](
                  opacity
                )})`,
              labelColor: () => `#DEDBEF`,
              style: {
                borderRadius: 16,
              },
            }}
            width={Dimensions.get("window").width * 0.54}
            height={180}
            withOuterLines={false}
            withShadow={true}
            bezier
            onDataPointClick={(pointData) => {
              Alert.alert(
                `Quantidade de ${data.title}`,
                JSON.stringify(pointData.value)
              );
            }}
          />
        )}
      </S.RightSide>
    </S.Container>
  );
}
