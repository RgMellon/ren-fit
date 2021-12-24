import * as React from "react";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../screens/Home/index";
import { Profile } from "../screens/Profile";

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: theme.colors.highlight,
        inactiveTintColor: theme.colors.detail,

        style: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 50,
        },
      }}
    >
      <Screen
        name="Dashboard"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} color={color} name="bar-chart" />
          ),
        }}
      />

      <Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons size={size} color={color} name="person" />
          ),
        }}
      />

      {/* <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              size={size}
              color={color}
              name="format-list-bulleted"
            />
          ),
        }}
      /> */}
    </Navigator>
  );
}
