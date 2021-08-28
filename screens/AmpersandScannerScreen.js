import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function AmpersandScannerScreen() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.textContainer}>
        <Text style={styles.text1}>Exchange Contct Information </Text>
        <Text style={styles.text}>
          Scan this QR code below to share your contacts
        </Text>
      </View>

      <Image
        source={require("../assets/qrcode.png")}
        style={styles.scanImage}
      />

      <View style={styles.idInfromation}>
        <Image source={require("../assets/ceo.jpg")} style={styles.idImage} />
        <View>
          <Text style={styles.idTextHeading}>Mista Boakye</Text>
          <Text style={styles.idText}>Chief Executive Officer</Text>
        </View>
      </View>
      <View style={styles.scanInformation}>
        <Text style={styles.scanText}>Want to add a new connection?</Text>
        <TouchableOpacity>
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
  textContainer: {
    // alignItems: "center",
    justifyContent: "center",
    flex: 0.2,
    marginHorizontal: 50,
    marginTop: 50,
  },
  scanImage: {
    flex: 0.5,
    resizeMode: "contain",
    width: 400,
    justifyContent: "center",
    alignItems: "center",
  },
  idInfromation: {
    flex: 0.2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 30,
  },
  idTextHeading: {
    fontWeight: "bold",
    fontSize: 20,
    paddingVertical: 10,
  },
  idImage: {
    resizeMode: "contain",
    width: 100,
    height: 100,
    borderRadius: 200,
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
  scanText: {},
});
