import React, { createContext, useContext, useEffect, useState } from "react";

// import * as Google from "expo-google-app-auth";
import * as AuthSession from "expo-auth-session";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthProviderProps = {
  children: React.ReactNode;
};

type User = {
  id: string;
  name: string;
  email: string;
  picture?: string;
  access_token: string;
};

type AuthResponse = {
  params: {
    access_token: string;
  };
  type: string;
};

export type AuthContextData = {
  user: User;
  loading: boolean;
  signInWithGoogle(): Promise<void>;
  signOut(): Promise<void>;
};

export const AuthContextDefaultValues = {
  user: {
    id: "id",
    email: "email",
    name: "name",
    access_token: "access_token",
  },
  loading: false,
  signInWithGoogle: () => Promise.resolve().then(() => {}),
  signOut: () => Promise.resolve().then(() => {}),
};

export const AuthContext = createContext<AuthContextData>(
  AuthContextDefaultValues
);

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  async function signInWithGoogle() {
    try {
      const CLIENT_ID =
        "757452525938-6b8pismrpfocl340o9k2tq9fqab5tq36.apps.googleusercontent.com";
      const REDIRECT_URI = "https://auth.expo.io/@rgmellon/ren-fit";
      const RESPONSE_TYPE = "token";
      const SCOPE = encodeURI(
        "https://www.googleapis.com/auth/fitness.sleep.read https://www.googleapis.com/auth/fitness.activity.read https://www.googleapis.com/auth/fitness.location.read https://www.googleapis.com/auth/fitness.blood_pressure.write profile email"
      );

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

      const { params, type } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthResponse;

      if (type === "success") {
        const response = await fetch(
          `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`
        );

        const userInfo = await response.json();

        const userWIthAcessToken = {
          ...userInfo,
          access_token: params.access_token,
        };

        setUser(userWIthAcessToken);
        await AsyncStorage.setItem(
          "@renFit:user",
          JSON.stringify(userWIthAcessToken)
        );
      }
    } catch (err) {
      throw new Error(JSON.stringify(err));
    }
  }

  async function signOut() {
    await AsyncStorage.removeItem("@renFit:user");
    setUser({} as User);
  }

  async function getLoggedUser() {
    const loggedUser = await AsyncStorage.getItem("@renFit:user");

    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }

    setLoading(false);
  }

  useEffect(() => {
    getLoggedUser();
  }, []);

  return (
    <AuthContext.Provider value={{ signInWithGoogle, signOut, user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
