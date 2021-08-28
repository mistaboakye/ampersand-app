import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";

export default function SignInForm() {
  return (
    <ScrollView style={styles.mainContainer}>
      {/* Cover Imagw */}
      <Image source={require("../assets/coverimage.jpg")} style={styles.logo} />
      <View style={styles.formContainer}>
        {/* Error Feedback */}
        {/* <Text style={styles.formFeedback}>
          Email or Password is incorrect, check and try again
        </Text> */}
        {/* Form */}
        <View style={styles.formGroup1}>
          <Text style={styles.textTitle}>Email</Text>
          <TextInput
            style={styles.textPlaceholder}
            placeholder="mistaboakye@bracestech.com"
          />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.textTitle}>Password</Text>
          <TextInput
            style={styles.textPlaceholder}
            placeholder="******"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>
            S I G N <Text /> I N
          </Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}> Forgot?</Text>

          <TouchableOpacity style={styles.footerTextContainer}>
            <Text style={styles.footerText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#ffffff",
    flex: 1,
  },
  //Cover Image
  logo: {
    flex: 0.3,
    resizeMode: "cover",
    width: 420,
    height: 50,
    paddingVertical: 150,
  },
  //Form
  formContainer: {
    paddingTop: 50,

    paddingHorizontal: 20,
    flex: 0.7,
  },
  formFeedback: {
    color: "#c20000",
  },
  formGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
  },
  formGroup1: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomColor: "#dcdcdc",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },

  textTitle: {
    fontSize: 17,
  },
  //Button
  buttonText: {
    color: "white",
    fontSize: 15,
    letterSpacing: 1,
  },
  textPlaceholder: {
    fontSize: 17,
    paddingVertical: 10,
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
  //Forgot Reset Password
  footerContainer: {
    flexDirection: "row",
    paddingVertical: 20,
  },
  footerTextContainer: {
    paddingHorizontal: 5,
    paddingBottom: 5,
    borderBottomWidth: 2,
    borderBottomColor: "#c20000",
    fontSize: 15,
  },
  footerText: {
    fontSize: 15,
  },
});
