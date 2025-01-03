import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
import React from "react";
import LoginScreen from "./Screens/LoginScreen";


export default function Page() {
  return (
    <View className="flex-1">
      <StatusBar />
      <LoginScreen/>
      </View>
  );
}



