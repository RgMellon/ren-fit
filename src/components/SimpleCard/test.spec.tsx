import React from "react";
import { renderWithTeme } from "../../utils/test.utils";

import { SimpleCard } from ".";

jest.mock("@expo/vector-icons", () => ({
  FontAwesome5: "Icon",
}));

jest.mock("@expo/vector-icons/FontAwesome", () => "Icon");

describe("SimpleCard", () => {
  it("should render the title passed to params", () => {
    const { getByText } = renderWithTeme(
      <SimpleCard title="any_title" value="any_value" icon="burn" sufix="KM" />
    );

    const title = getByText("any_title");

    expect(title.props.children).toBeTruthy();
  });

  it("shoul render the icon when passed to params", () => {
    const { getByTestId } = renderWithTeme(
      <SimpleCard title="any_title" value="any_value" icon="burn" sufix="KM" />
    );

    const icon = getByTestId(/icon-card/);

    expect(icon.props.name).toEqual("burn");
  });

  it("shoul render the right icon color when passed to params ", () => {
    const { getByTestId } = renderWithTeme(
      <SimpleCard
        title="any_title"
        value="any_value"
        icon="burn"
        colorIcon="#dddd"
        sufix="KM"
      />
    );

    const icon = getByTestId(/icon-card/);

    expect(icon.props.color).toEqual("#dddd");
  });

  it("shoul render the default icon color when not passed to params", () => {
    const { getByTestId } = renderWithTeme(
      <SimpleCard title="any_title" value="any_value" icon="burn" sufix="KM" />
    );

    const icon = getByTestId(/icon-card/);

    expect(icon.props.color).toEqual("#ff8354");
  });

  it("shoul render the sufix passed to params", () => {
    const { getByText } = renderWithTeme(
      <SimpleCard title="any_title" value="any_value" icon="burn" sufix="KM" />
    );

    const sufix = getByText(/KM/);

    expect(sufix).toBeTruthy();
  });
});
