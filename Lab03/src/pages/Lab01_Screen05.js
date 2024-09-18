import {
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { RadioButton } from "react-native-paper";

const { height, width } = Dimensions.get("window");

export const Screen05 = ({ navigation }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setBirthday] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState("Male");

  return (
    <View style={styles.container}>
      <Text style={styles.header}>REGISTER</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Name"
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setPhone}
          value={phone}
          placeholder="Phone"
          keyboardType="phone-pad"
        />
      </View>

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

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setBirthday}
          value={birthday}
          placeholder="Birthday"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.genderContainer}>
        <View style={styles.genderItem}>
          <RadioButton
            value="Male"
            status={checked === "Male" ? "checked" : "unchecked"}
            onPress={() => setChecked("Male")}
          />
          <Text style={{ fontSize: height * 0.025 }}>Male</Text>
        </View>
        <View style={styles.genderItem}>
          <RadioButton
            value="Female"
            status={checked === "Female" ? "checked" : "unchecked"}
            onPress={() => setChecked("Female")}
          />
          <Text style={{ fontSize: height * 0.025 }}>Female</Text>
        </View>
      </View>

      <Pressable style={styles.registerButton} onPress={() => navigation.navigate('')}>
        <Text style={styles.registerButtonText}>REGISTER</Text>
      </Pressable>

      <Text style={styles.termsText}>
        When you agree to terms and conditions
      </Text>
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
  header: {
    fontSize: height * 0.05,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dfeee7",
    marginBottom: 20,
    paddingHorizontal: 10,
    height: height * 0.06,
    width: width * 0.85,
  },
  input: {
    flex: 1,
    fontSize: height * 0.025,
    paddingHorizontal: 10,
  },
  eyeIcon: {
    padding: 5,
  },
  genderContainer: {
    flexDirection: "row",
    marginBottom: 50,
    width: width * 0.85,
  },
  genderItem: {
    flexDirection: "row",
    alignItems: "center",
    width: width * 0.4,
  },
  registerButton: {
    backgroundColor: "#D25136",
    height: height * 0.06,
    width: width * 0.85,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  registerButtonText: {
    color: "#fff",
    fontSize: height * 0.025,
    fontWeight: "bold",
  },
  termsText: {
    fontSize: height * 0.02,
    textAlign: "center",
  },
});
