import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "react-native";
import React from "react";
import LoginScreen from "./Screens/LoginScreen";
import {ClerkProvider, SignedIn, SignedOut} from '@clerk/clerk-expo';

export default function Page() {
  return (
    <ClerkProvider publishableKey="pk_test_c29saWQtbW9jY2FzaW4tNzUuY2xlcmsuYWNjb3VudHMuZGV2JA">
    <View className="flex-1">
      <StatusBar />
      
      <SignedIn>
        <Text>You are Signed In</Text>
      </SignedIn>
      <SignedOut>
        <LoginScreen/>
      </SignedOut>


      </View>
      </ClerkProvider>
  );
}



