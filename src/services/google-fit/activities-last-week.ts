import {
  calories_filter,
  distance_filter,
  steps_filter,
  calories_dataSource_id,
  steps_dataSource_id,
  distance_dataSource_id,
} from "./google-const";

import { format, subDays } from "date-fns";
import ptBr from "date-fns/locale/pt-BR";

import { google_api } from "./google-fit-api";

type ValueProps = {
  intVal?: number;
  fpVal: number;
};

type PointProps = {
  value: ValueProps[];
};

type DataSetProps = {
  dataSourceId: string;
  point: PointProps[];
};

type BucketProps = {
  startTimeMillis: number;
  dataset: DataSetProps[];
};

export type DayAndAmount = {
  day: string;
  amount: number;
};

const getActivitiesFromLastWeek = async (access_token: string) => {
  const sevenDaysAgo = subDays(new Date(), 7);

  sevenDaysAgo.setHours(0, 0, 0, 0);

  const sevenDaysAgoInMiliSeconds = sevenDaysAgo.getTime();
  const now = new Date().getTime();

  try {
    const params = {
      aggregateBy: [
        {
          dataSourceId:
            "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps",
        },
        {
          dataSourceId: calories_dataSource_id,
        },
      ],
      bucketByTime: { durationMillis: 86400000 }, //86400000 => one day in mili seconds
      startTimeMillis: sevenDaysAgoInMiliSeconds,
      endTimeMillis: now,
    };

    const response = await google_api.post(
      "/users/me/dataset:aggregate",
      params,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const mappedStepsResult = mappedSteps(response.data.bucket);
    const mappedCaloriesResult = mappedCalories(response.data.bucket);

    return {
      stepsInAWeek: mappedStepsResult,
      caloriesInAWeek: mappedCaloriesResult,
    };
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

function mappedSteps(bucket: BucketProps[]): DayAndAmount[] {
  const formatedDateWithDayAndValue = bucket.map((bucket) => {
    return {
      day: format(new Date(Number(bucket.startTimeMillis)), "EEEEE", {
        locale: ptBr,
      }),
      amount: bucket.dataset[0].point[0].value[0].intVal,
    };
  });

  return formatedDateWithDayAndValue as DayAndAmount[];
}

function mappedCalories(bucket: BucketProps[]): DayAndAmount[] {
  const formatedCalories = bucket.map((bucket) => {
    return {
      day: format(new Date(Number(bucket.startTimeMillis)), "EEEEE", {
        locale: ptBr,
      }),
      amount: Number(
        (bucket.dataset[1].point[0].value[0].fpVal / 1000).toFixed(3)
      ),
    };
  });

  return formatedCalories as DayAndAmount[];
}

export { getActivitiesFromLastWeek };
