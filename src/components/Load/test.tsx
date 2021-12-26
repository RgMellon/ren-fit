import React from "react";

import { render } from "../../utils/test.utils2";

import { Load } from ".";
import loadJson from "./load.json";

describe("Load", () => {
  it("should render the load with an animation", () => {
    const { getByTestId } = render(<Load />);

    const animation = getByTestId("load-animation");

    // console.log(animation.props.sourceJson);

    expect(animation.props.sourceJson).toStrictEqual(JSON.stringify(loadJson));
  });
});
