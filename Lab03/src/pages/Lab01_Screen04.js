import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export const Screen04 = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.loginHeader}>LOGIN</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
          secureTextEntry={!showPassword}
        />
        <Pressable
          style={styles.eyeIcon}
          onPress={() => setShowPassword(!showPassword)}
        >
          <FontAwesome name={showPassword ? "eye" : "eye-slash"} size={24} />
        </Pressable>
      </View>
      <Pressable style={styles.loginButton} onPress={() => navigation.navigate('Screen05')}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </Pressable>
      <Text style={styles.termsText}>
        When you agree to terms and conditions
      </Text>
      <Pressable onPress={() => {}}>
        <Text style={styles.forgotPasswordText}>For got your password?</Text>
      </Pressable>
      <Text style={styles.orText}>Or login with</Text>
      <View style={styles.socialIcons}>
        <Pressable style={[styles.socialIcon, styles.iconFb]}>
          <FontAwesome name="facebook" size={32} color="#fff" />
        </Pressable>
        <Pressable style={[styles.socialIcon, styles.iconZalo]}>
          <Text style={styles.zaloText}>Z</Text>
        </Pressable>
        <Pressable style={[styles.socialIcon, styles.iconGG]}>
          <Image
            source={require("../../assets/iconGG.png")}
            style={{ width: 42, height: 42 }}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f4faf8",
    paddingVertical: 100,
  },
  loginHeader: {
    fontSize: height * 0.04,
    fontWeight: "bold",
    marginBottom: 150,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dfeee7",
    marginBottom: 50,
    paddingHorizontal: 10,
    height: height * 0.06,
    width: width * 0.85,
  },
  input: {
    flex: 1,
    fontSize: height * 0.02,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    padding: 5,
  },
  loginButton: {
    backgroundColor: "#D25136",
    height: height * 0.06,
    width: width * 0.85,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: height * 0.025,
    fontWeight: "bold",
  },
  termsText: {
    fontSize: height * 0.02,
    textAlign: "center",
  },
  forgotPasswordText: {
    fontSize: height * 0.02,
    color: "#5A55A1",
    marginTop: 20,
    textDecorationLine: "underline",
  },
  orText: {
    fontSize: height * 0.02,
    marginVertical: 20,
  },
  socialIcons: {
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.85,
    height: height * 0.2,
  },
  socialIcon: {
    width: "33.33%",
    height: height * 0.06,
    alignItems: "center",
    borderRadius: 5,
  },
  iconFb: {
    backgroundColor: "#3b5998",
    padding: 10,
    alignItems: "center",
  },
  iconZalo: {
    color: "#fff",
    backgroundColor: "#0F8EE0",
    fontSize: height * 0.03,
    fontWeight: "bold",
  },
  zaloText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: height * 0.04,
    textAlignVertical: "center",
    height: "100%",
  },
  iconGG: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#0680F1",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
