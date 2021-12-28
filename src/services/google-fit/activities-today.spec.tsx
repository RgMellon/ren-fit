import { getActivitiesFromToday } from "./activities-today";

import AxiosMock from "axios-mock-adapter";
import { google_api } from "../google-fit/google-fit-api";

const apiMock = new AxiosMock(google_api);

describe("activities-today()", () => {
  it("should return user activities for today", async () => {
    const items = {
      bucket: [
        {
          startTimeMillis: "1640487600000",
          endTimeMillis: "1640544660290",
          dataset: [
            {
              dataSourceId:
                "derived:com.google.step_count.delta:com.google.android.gms:aggregated",
              point: [
                {
                  startTimeNanos: "1640521753134068036",
                  endTimeNanos: "1640531382226587601",
                  dataTypeName: "com.google.step_count.delta",
                  originDataSourceId:
                    "raw:com.google.step_count.cumulative:samsung:SM-G780G:7b27336a:step_counter  Non-wakeup",
                  value: [
                    {
                      intVal: 111,
                      mapVal: [],
                    },
                  ],
                },
              ],
            },
            {
              dataSourceId:
                "derived:com.google.distance.delta:com.google.android.gms:aggregated",

              point: [
                {
                  value: [
                    {
                      fpVal: 40,
                    },
                  ],
                },
              ],
            },
            {
              dataSourceId:
                "derived:com.google.calories.expended:com.google.android.gms:aggregated",
              point: [
                {
                  startTimeNanos: "1640487600000000000",
                  endTimeNanos: "1640531382226587601",
                  dataTypeName: "com.google.calories.expended",
                  originDataSourceId:
                    "derived:com.google.calories.expended:com.google.android.gms:merge_calories_expended",
                  value: [
                    {
                      fpVal: 833.4584875671918,
                      mapVal: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    apiMock.onPost("/users/me/dataset:aggregate").reply(200, items);

    const result = await getActivitiesFromToday("any_token_acess");

    expect(result).toStrictEqual({
      stepsAmount: "111",
      distanceAmount: (40 / 1000).toFixed(2),
      caloriesAmount: (833.4584875671918 / 1000).toFixed(3),
    });
  });

  it("should return 0 when dont have a distance value", async () => {
    const items = {
      bucket: [
        {
          startTimeMillis: "1640487600000",
          endTimeMillis: "1640544660290",
          dataset: [
            {
              dataSourceId:
                "derived:com.google.step_count.delta:com.google.android.gms:aggregated",
              point: [
                {
                  startTimeNanos: "1640521753134068036",
                  endTimeNanos: "1640531382226587601",
                  dataTypeName: "com.google.step_count.delta",
                  originDataSourceId:
                    "raw:com.google.step_count.cumulative:samsung:SM-G780G:7b27336a:step_counter  Non-wakeup",
                  value: [
                    {
                      intVal: 111,
                      mapVal: [],
                    },
                  ],
                },
              ],
            },
            {
              dataSourceId:
                "derived:com.google.distance.delta:com.google.android.gms:aggregated",

              point: [],
            },
            {
              dataSourceId:
                "derived:com.google.calories.expended:com.google.android.gms:aggregated",
              point: [
                {
                  startTimeNanos: "1640487600000000000",
                  endTimeNanos: "1640531382226587601",
                  dataTypeName: "com.google.calories.expended",
                  originDataSourceId:
                    "derived:com.google.calories.expended:com.google.android.gms:merge_calories_expended",
                  value: [
                    {
                      fpVal: 833.4584875671918,
                      mapVal: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };

    apiMock.onPost("/users/me/dataset:aggregate").reply(200, items);

    const result = await getActivitiesFromToday("any_token_acess");

    expect(result).toStrictEqual({
      stepsAmount: "111",
      distanceAmount: "0",
      caloriesAmount: (833.4584875671918 / 1000).toFixed(3),
    });
  });

  it("should be error when passing no params", async () => {
    try {
      await getActivitiesFromToday();
    } catch (err) {
      expect(err.message).toBe("access_token is necessary");
      expect(err.message).toMatch("access_token is necessary");
    }
  });
});
