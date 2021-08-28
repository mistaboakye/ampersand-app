import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View, Image } from "react-native";
import WelcomeScreenGetStarted from "./screens/WelcomeScreenGetStarted";
import WelcomeScreenRedSign from "./screens/WelcomeScreenRegSign";
import SignInForm from "./screens/SignInForm";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Get Started" component={WelcomeScreenGetStarted} />
        <Stack.Screen
          name="Reg&Sign"
          component={WelcomeScreenRedSign}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "red",
            },
          }}
        />
        <Stack.Screen
          name="Sign In"
          component={SignInForm}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "red",
            },
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "red",
            },
          }}
        />
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
          options={{
            headerTitle: () => (
              <Image
                source={require("./assets/ampersand.png")}
                style={{
                  tintColor: "white",
                  width: 200,
                  height: 50,
                  resizeMode: "contain",
                }}
              />
            ),
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "red",
            },
          }}
        />
      </Stack.Navigator>
      {/* <WelcomeScreenGetStarted /> */}
      {/* <WelcomeScreenRedSign /> */}
      {/* <SignInForm /> */}
      {/* <RegisterScreen /> */}
      {/* <HomeScreen /> */}
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
