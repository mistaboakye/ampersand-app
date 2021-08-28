import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function WelcomeScreenRedSign({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Image source={require("../assets/firstimage.jpg")} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.textHeading}>
          KEEP IN TOUCH WITH THE PEOPLE OF AMPERSAND
        </Text>
        <Text style={styles.text}>
          Sign in or register with the Ampersand email
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.text}>REGISTER</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Sign In");
          }}
        >
          <Text style={styles.text}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ffffff",
    // justifyContent: "center",
    // alignItems: "center",
    //   marginHorizontal: 10,
  },
  logo: {
    flex: 0.5,
    resizeMode: "cover",
    width: 420,
    height: 50,
    paddingVertical: 220,
  },
  textContainer: {
    flex: 0.3,
    paddingVertical: 20,
    paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
  text: {
    color: "#5e5b5b",
  },
  textHeading: {
    fontSize: 17,
    paddingVertical: 10,
  },
  buttonContainer: {
    flex: 0.2,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 50,
    paddingVertical: 100,
    marginVertical: 10,
  },
  button: {
    paddingVertical: 30,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#c20000",
  },
});
