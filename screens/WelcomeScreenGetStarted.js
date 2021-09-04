import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function WelcomeScreenGetStarted({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Image source={require("../assets/ampersand.png")} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>A M P E R S A N D </Text>
        <Text style={styles.text}>C O N T A C T S</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Reg&Sign");
        }}
      >
        <Text style={styles.text}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 50,
  },
  logo: {
    resizeMode: "contain",
    width: 150,
    height: 50,
    paddingVertical: 110,
    tintColor: "#5e5b5b",
  },
  textContainer: {
    paddingVertical: 150,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    paddingVertical: 10,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#c20000",
  },
  text: {
    color: "#5e5b5b",
  },
});
