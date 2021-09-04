import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export default class ProfilePage extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.profilePageContainer}>
          <View style={styles.idContainer}>
            <Image
              source={require("../assets/ceo.jpg")}
              style={styles.idImage}
            />
            <View>
              <Text style={styles.idTextHeading}>Mista Boakye</Text>
              <Text style={styles.idText}>Chief Executive Officer</Text>
            </View>
          </View>
          <View style={styles.socialContainer}>
            <Entypo name="twitter-with-circle" size={40} color="#5e5b5b" />
            <Entypo
              name="linkedin-with-circle"
              size={40}
              color="#5e5b5b"
              style={styles.socialText}
            />
          </View>
          <View style={styles.socialContainer}>
            <Feather name="phone" size={24} color="black" />
            <Text style={styles.socialText}>+233 209 414 362</Text>
          </View>
          <View style={styles.socialContainer}>
            <Feather name="mail" size={24} color="black" />
            <Text style={styles.socialText}>mistaboakye@bracestech.com</Text>
          </View>
          <View style={styles.socialContainer}>
            <Feather name="map-pin" size={24} color="black" />
            <Text style={styles.socialText}>Zongo, Lachichi</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  profilePageContainer: {
    flex: 1,
    marginLeft: 30,
    marginTop: 50,
  },
  idContainer: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  idTextHeading: {
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 5,
    color: "#5e5b5b",
  },
  idText: {
    color: "#5e5b5b",
  },
  idImage: {
    width: 70,
    height: 70,
    borderRadius: 100,
    marginRight: 10,
  },
  socialContainer: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 10,
  },
  socialText: {
    marginLeft: 15,
  },
});
