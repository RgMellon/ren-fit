import { renderHook, act } from "@testing-library/react-hooks";
import { waitFor } from "@testing-library/react-native";

import { AuthProvider, useAuth } from "./auth";

jest.mock("expo-auth-session", () => {
  return {
    startAsync: () => {
      return {
        type: "success",
        params: {
          access_token: "any_token",
        },
      };
    },
  };
});

const mockedUser = {
  id: "user_id",
  name: "any_name",
  email: "email@mail.com",
  picture: "picture.png",
};

global.fetch = jest.fn().mockImplementation(() =>
  Promise.resolve({
    ok: true,

    json: () => mockedUser,
  })
);

describe("Auth Hook", () => {
  it("should be able to sign in with google account", async () => {
    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    await act(() => result.current.signInWithGoogle());

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(result.current.user.email).toBe("email@mail.com");
  });
});
