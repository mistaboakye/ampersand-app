import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
} from "react-native";
import ImagePickerButton from "../components/image-picker";

export default function RegisterScreen({ navigation }) {
  return (
    <ScrollView style={styles.mainContainer}>
      <ImagePickerButton />

      {/* form */}
      <View style={styles.formContainer}>
        <View style={styles.formGroup}>
          <Text style={styles.textTitle}>Full Name</Text>
          <TextInput
            style={styles.textPlaceholder}
            placeholder="Mista Boakye"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.textTitle}>Email</Text>
          <TextInput
            style={styles.textPlaceholder}
            placeholder="mistaboakye@bracestech.com"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.textTitle}>Phone Number</Text>
          <TextInput
            style={styles.textPlaceholder}
            placeholder="+233 (209) 414 362"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.textTitle}>Role</Text>
          <TextInput
            style={styles.textPlaceholder}
            placeholder="Chief Executive Officer"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.textTitle}>Twitter</Text>
          <TextInput
            style={styles.textPlaceholder}
            placeholder="@mistaboakye"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.textTitle}>LinkedIn</Text>
          <TextInput
            style={styles.textPlaceholder}
            placeholder="/mista.boakye"
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text
            style={styles.buttonText}
            onPress={() => {
              navigation.navigate("Home Screen");
            }}
          >
            R E G I S T E R
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  editPhoto: {
    flex: 0.4,
  },

  // icon styling

  logo: {
    resizeMode: "cover",
    width: 420,
    height: 50,
    paddingVertical: 150,
    backgroundColor: "#e6e6e6",
    alignItems: "center",
    justifyContent: "center",
  },
  logoText: {
    color: "#ff4747",
    borderColor: "red",
    borderWidth: 2,
  },
  // form styling
  formContainer: {
    paddingHorizontal: 20,
    flex: 0.6,
  },
  formFeedback: {
    color: "#c20000",
  },
  formGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#dcdcdc",
  },

  textTitle: {
    fontSize: 17,
  },

  buttonText: {
    color: "white",
    fontSize: 15,
    letterSpacing: 1,
  },
  textPlaceholder: {
    flex: 1,
    fontSize: 17,
    paddingVertical: 10,
    textAlign: "right",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 50,
    backgroundColor: "#ff4747",
    borderRadius: 5,
    marginVertical: 20,
    height: 50,
  },
});
