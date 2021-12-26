import React from "react";

import { Header } from ".";
import { AuthContextDefaultValues } from "../../hooks/auth";

import { render } from "../../utils/test.utils2";

describe("Header", () => {
  it("should render the user avatar", () => {
    const authContextProps = {
      ...AuthContextDefaultValues,
      user: {
        id: "1",
        name: "John Doe",
        email: "john.doe@gmail.com",
        access_token: "1209301239i03912v",
        picture: "http://localhost/image.jpg",
      },
    };

    const { getByRole } = render(<Header />, { authContextProps });

    const avatar = getByRole("image");

    expect(avatar).toBeTruthy();
    expect(avatar.props.source.uri).toBe("http://localhost/image.jpg");
  });

  it("should render the user name", () => {
    const authContextProps = {
      ...AuthContextDefaultValues,
      user: {
        id: "1",
        name: "John Doe",
        email: "john.doe@gmail.com",
        access_token: "1209301239i03912v",
        picture: "http://localhost/image.jpg",
      },
    };

    const { getByText } = render(<Header />, { authContextProps });

    const userName = getByText(/John Doe/);

    expect(userName).toBeTruthy();
  });
});
