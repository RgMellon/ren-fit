import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import { Login } from "../screens/auth/Login";

const Stack = createStackNavigator();

function AuthRoutes() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export { AuthRoutes };
