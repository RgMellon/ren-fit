import React, { useEffect, useState } from "react";
import { SimpleCard } from "../../../components/SimpleCard";

import { StepCount } from "../../../components/StepCount";
import { useAuth } from "../../../hooks/auth";
import { getActivitiesFromToday } from "../../../services/google.fit";

import * as S from "./styles";

type ActivitiesToday = {
  stepsAmount: string;
  distanceAmount: string;
  caloriesAmount: string;
};

export function Today() {
  const { user } = useAuth();

  const [activityToday, setActivityToday] = useState({} as ActivitiesToday);

  useEffect(() => {
    getData();
  }, [user]);

  async function getData() {
    try {
      const { stepsAmount, distanceAmount, caloriesAmount } =
        await getActivitiesFromToday(user.access_token);

      const activityData = {
        stepsAmount,
        distanceAmount,
        caloriesAmount,
      } as ActivitiesToday;

      setActivityToday(activityData);
    } catch (err) {
      alert("ocorreu um erro ao recuperar os dados");
    }
  }

  return (
    <S.Container>
      <StepCount amountSteps={activityToday.stepsAmount} />

      <S.Wrapper>
        <S.ContentCard>
          <SimpleCard
            title="Calorias"
            icon="burn"
            value={activityToday.caloriesAmount}
            sufix="Cal"
          />
        </S.ContentCard>

        <S.ContentCard>
          <SimpleCard
            title="Distancia"
            icon="walking"
            colorIcon="#5142ab"
            value={activityToday.distanceAmount}
            sufix="KM"
          />
        </S.ContentCard>
      </S.Wrapper>
    </S.Container>
  );
}
