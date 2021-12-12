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

const getGoogleFitData = async (access_token: string) => {
  const todayStart = startOfDay(new Date());
  const today = todayStart.getTime();
  const now = new Date().getTime();

  // console.log("todayStart", todayStart.getTime());
  // console.log("now", now);

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
    console.log(filteredResponse);

    // console.log(JSON.stringify(filteredResponse));
  } catch (error) {
    alert("err");
    console.log(error.response);
  }
};

export { getGoogleFitData };
