import { renderHook, act } from "@testing-library/react-hooks";
import { mocked } from "ts-jest/utils";

import { startAsync } from "expo-auth-session";

import { AuthProvider, useAuth } from "./auth";

jest.mock("expo-auth-session");

global.fetch = jest.fn();

describe("Auth Hook", () => {
  it("should be able to sign in with google account", async () => {
    const googleMocked = mocked(startAsync as any);

    googleMocked.mockReturnValueOnce({
      type: "success",
      params: {
        access_token: "any_token",
      },
    });

    const fetchMocked = mocked(global.fetch as any);

    fetchMocked.mockReturnValueOnce({
      ok: true,
      json: () => {
        return {
          stepsid: "id",
          name: "any_name",
          email: "email@mail.com",
          picture: "picture.png",
        };
      },
    });

    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    await act(() => result.current.signInWithGoogle());

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(result.current.user.email).toBe("email@mail.com");
  });

  it("should not connect if user cancel the login", async () => {
    const googleMocked = mocked(startAsync as any);
    googleMocked.mockReturnValue({
      type: "cancel",
    });

    const { result } = renderHook(() => useAuth(), { wrapper: AuthProvider });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user).not.toHaveProperty("id");
  });
});
