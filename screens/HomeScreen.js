import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import ProfileScannner from "../components/ProfileScanner";
import QRCodeScanner from "../components/QRCodeScanner";
import { AntDesign } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeScreenStatusContainter}>
        <Image
          source={require("../assets/ampersand.png")}
          style={styles.homeScreenStatus}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Profile");
          }}
        >
          <View style={styles.profileIcon}>
            <AntDesign name="user" size={30} color="#ffffff" />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Exchange Contct Information </Text>
        <Text style={styles.text}>
          Scan this QR code below to share your contacts
        </Text>
      </View>
      <View style={styles.scanImage}>
        <ProfileScannner />
      </View>

      <View style={styles.idContainer}>
        <Image source={require("../assets/ceo.jpg")} style={styles.idImage} />
        <View>
          <Text style={styles.idTextHeading}>Mista Boakye</Text>
          <Text style={styles.idText}>Chief Executive Officer</Text>
        </View>
      </View>
      <View style={styles.scanInformation}>
        <Text>Want to add a new connection?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Scanner");
          }}
        >
          <Text style={styles.scanButton}>Scan QR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  profileIcon: {
    marginLeft: 50,
    marginRight: 30,
  },
  homeScreenStatusContainter: {
    flex: 0.07,
    flexDirection: "row",
    backgroundColor: "red",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingVertical: 15,
  },
  homeScreenStatus: {
    tintColor: "white",
    width: 200,
    height: 40,
    resizeMode: "contain",
  },

  textContainer: {
    // alignItems: "center",
    justifyContent: "center",
    flex: 0.2,
    marginHorizontal: 50,
    marginTop: 50,
  },
  scanImage: {
    flex: 0.4,
    justifyContent: "center",
    marginHorizontal: 50,
  },
  idContainer: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 30,
  },
  idTextHeading: {
    fontWeight: "bold",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  idImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 20,
    marginHorizontal: 15,
  },
  details: {
    paddingVertical: 20,
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "#c20000",
  },
  text: {
    color: "#5e5b5b",
  },
  text1: {
    color: "black",
  },
  scanInformation: {
    flex: 0.1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: 1,

    borderColor: "#dcdcdc",
  },
  scanButton: {
    borderWidth: 1,
    borderColor: "#c20000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: "#c20000",
    marginHorizontal: 10,
  },
});
