import React from "react";

import { View, TouchableOpacity, Text } from "react-native";
import { useAuth } from "../../hooks/auth";

export function Profile() {
  const { signOut } = useAuth();

  function handleLogout() {
    signOut();
  }

  return (
    <View>
      <TouchableOpacity
        onPress={handleLogout}
        style={{
          width: 200,
          height: 50,
          backgroundColor: "red",
          marginTop: 100,
        }}
      >
        <Text> Sair </Text>
      </TouchableOpacity>
    </View>
  );
}
