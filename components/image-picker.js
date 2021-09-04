import React, { useState, useEffect } from "react";
import {
  Button,
  Image,
  View,
  Platform,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { AntDesign } from "@expo/vector-icons";

export default function ImagePickerButton() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <TouchableOpacity onPress={pickImage}>
      <ImageBackground style={styles.logo} source={{ uri: image }}>
        <AntDesign name="user" size={80} color="#ff4747" />
        <Text style={styles.logoText}>ADD PROFILE PHOTO</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  logo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 250,
  },
  logoText: {
    color: "red",
    margin: 10,
  },
});
