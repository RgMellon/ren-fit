export const steps_dataSource_id =
  "derived:com.google.step_count.delta:com.google.android.gms:merge_step_deltas";

export const distance_dataSource_id =
  "derived:com.google.distance.delta:com.google.android.gms:merge_distance_delta";

export const calories_dataSource_id =
  "derived:com.google.calories.expended:com.google.android.gms:merge_calories_expended";

export const steps_filter =
  "derived:com.google.step_count.delta:com.google.android.gms:aggregated";

export const distance_filter =
  "derived:com.google.distance.delta:com.google.android.gms:aggregated";

export const calories_filter =
  "derived:com.google.calories.expended:com.google.android.gms:aggregated";

import { subHours, startOfDay, subDays } from "date-fns";

import { google_api } from "./google-fit-api";

const filterResponse = (response) => {
  const steps = response.dataset.filter(
    (data) => data.dataSourceId === steps_filter
  );

  const distance = response.dataset.filter(
    (data) => data.dataSourceId === distance_filter
  );

  const calories = response.dataset.filter(
    (data) => data.dataSourceId === calories_filter
  );

  return { steps, distance, calories };
};

const getActivitiesFromToday = async (access_token: string) => {
  // console.tron.log(access_token);

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
        ? filteredResponse.distance[0].point[0].value[0].intVal
        : "0";

    const caloriesValue =
      filteredResponse.calories[0].point[0].value[0].fpVal.toFixed(2);

    // console.log(filteredResponse);

    // console.log(JSON.stringify(filteredResponse));

    return {
      stepsAmount: stepValue,
      distanceAmount: distanceValue,
      caloriesAmount: caloriesValue,
    };
  } catch (error) {
    throw new Error(error);
  }
};

export { getActivitiesFromToday };
