import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import WelcomeScreenGetStarted from "./screens/WelcomeScreenGetStarted";
import WelcomeScreenRedSign from "./screens/WelcomeScreenRegSign";
import SignInForm from "./screens/SignInForm";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import ProfilePage from "./components/ProfilePage";
import QRCodeScanner from "./components/QRCodeScanner";
import MemberPage from "./components/MemberProfile";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        {/* Get Started */}
        <Stack.Screen
          name="Get Started"
          component={WelcomeScreenGetStarted}
          options={{ headerShown: false }}
        />
        {/* Register or Signin screen */}
        <Stack.Screen
          name="Reg&Sign"
          component={WelcomeScreenRedSign}
          options={{
            headerShown: false,
          }}
        />
        {/* Sign In Screen */}
        <Stack.Screen
          name="Sign In"
          component={SignInForm}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "white",
          }}
        />
        {/* Register Screen */}
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "white",
          }}
        />
        {/* Main Home Screen */}
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="Scanner"
          component={QRCodeScanner}
          options={{ title: null }}
        />
        <Stack.Screen
          name="Member Profile"
          component={MemberPage}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "red",
            },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf0e9",
  },
});
