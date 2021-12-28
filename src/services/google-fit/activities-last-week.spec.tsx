import { getActivitiesFromLastWeek } from "./activities-last-week";

import AxiosMock from "axios-mock-adapter";
import { google_api } from "./google-fit-api";

import { items, stepInAWeekMock, caloriesInAWeekMock } from "./mock-last-week";
const apiMock = new AxiosMock(google_api);

describe("activities-last-week()", () => {
  it("should return user activities of latest week", async () => {
    apiMock.onPost("/users/me/dataset:aggregate").reply(200, items);

    const result = await getActivitiesFromLastWeek("any_token_acess");

    expect(result).toStrictEqual({
      stepsInAWeek: stepInAWeekMock,
      caloriesInAWeek: caloriesInAWeekMock,
    });

    expect(result.stepsInAWeek).toHaveLength(8);
    expect(result.caloriesInAWeek).toHaveLength(8);
  });
});
