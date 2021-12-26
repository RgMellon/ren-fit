import {
  calories_filter,
  distance_filter,
  steps_filter,
  calories_dataSource_id,
  steps_dataSource_id,
  distance_dataSource_id,
} from "./google-const";

import { startOfDay } from "date-fns";

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
  dataset: DataSetProps[];
};

const filterResponse = (bucket: BucketProps) => {
  const steps = bucket.dataset.filter(
    (data) => data.dataSourceId === steps_filter
  );

  const distance = bucket.dataset.filter(
    (data) => data.dataSourceId === distance_filter
  );

  const calories = bucket.dataset.filter(
    (data) => data.dataSourceId === calories_filter
  );

  return { steps, distance, calories };
};

const getActivitiesFromToday = async (access_token: string) => {
  const todayStart = startOfDay(new Date());
  const today = todayStart.getTime();
  const now = new Date().getTime();

  try {
    const params = {
      aggregateBy: [
        {
          dataSourceId: steps_dataSource_id,
        },
        {
          dataSourceId: distance_dataSource_id,
        },
        {
          dataSourceId: calories_dataSource_id,
        },
      ],
      bucketByTime: { durationMillis: 86400000 }, //86400000 => one day in mili seconds
      startTimeMillis: today,
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

    const bucket = response.data.bucket[0];

    const filteredResponse = filterResponse(bucket);

    const stepValue = filteredResponse.steps[0].point[0].value[0].intVal;

    const distanceValue =
      filteredResponse.distance[0].point.length > 0
        ? (filteredResponse.distance[0].point[0].value[0].fpVal / 1000).toFixed(
            2
          )
        : "0";

    const caloriesValue = (
      filteredResponse.calories[0].point[0].value[0].fpVal / 1000
    ).toFixed(3);

    return {
      stepsAmount: String(stepValue),
      distanceAmount: String(distanceValue),
      caloriesAmount: caloriesValue,
    };
  } catch (error) {
    throw new Error(JSON.stringify(error));
  }
};

export { getActivitiesFromToday };
