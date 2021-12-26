import React, { useEffect, useState } from "react";

import { CardWithChart, Props } from "../../../components/CardWithChart";

import {
  getActivitiesFromLastWeek,
  DayAndAmount,
} from "../../../services/google-fit/activities-last-week";

import { useAuth } from "../../../hooks/auth";

const chartConfig = [
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

type LastWeekProps = {
  stepsInAWeek: DayAndAmount[];
  caloriesInAWeek: DayAndAmount[];
};

export function LastWeek() {
  const { user } = useAuth();

  const [activitiesInAWeek, setActivitiesInAWeek] = useState(
    {} as LastWeekProps
  );

  const [load, setLoad] = useState(true);

  useEffect(() => {
    getLastWeekAcitivies();
  }, [user]);

  async function getLastWeekAcitivies() {
    try {
      const { stepsInAWeek, caloriesInAWeek } = await getActivitiesFromLastWeek(
        user.access_token
      );

      setActivitiesInAWeek({ stepsInAWeek, caloriesInAWeek });
    } catch (err) {
      alert("erro");
    } finally {
      setLoad(false);
    }
  }

  return (
    <>
      {!load && (
        <>
          <CardWithChart
            data={chartConfig[0]}
            value={activitiesInAWeek.stepsInAWeek}
          />
          <CardWithChart
            data={chartConfig[1]}
            value={activitiesInAWeek.caloriesInAWeek}
          />
        </>
      )}
    </>
  );
}
