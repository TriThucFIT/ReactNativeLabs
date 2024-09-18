import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { SimpleLineIcons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

export const Screen02 = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <LinearGradient
      colors={["#C7F4F6", "#D1F4F6", "#E5F4F5", "#E5F4F5", "#00CCF9"]}
      style={styles.container}
    >
      <View style={styles.viewIcon}>
        <SimpleLineIcons name="lock" size={100} color="black" />
      </View>
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}>FORGET</Text>
        <Text style={styles.textHeader}>PASSWORD</Text>
      </View>
      <View style={styles.viewText}>
        <Text style={styles.textBody}>
          Provide your account's email for which you want to reset your password
        </Text>
      </View>
      <View style={styles.viewTextInput}>
        <SimpleLineIcons
          style={styles.envelopeIcon}
          name="envelope"
          size={26}
          color="black"
        />
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.viewButton}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Screen03");
          }}
        >
          <Text style={styles.textButton}>NEXT</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewIcon: {
    flex: 2.5,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  image: {
    height: height * 0.2,
    width: width * 0.4,
  },

  viewHeader: {
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontSize: height * 0.05,
    fontWeight: "bold",
  },
  viewText: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textBody: {
    fontWeight: "bold",
    fontSize: height * 0.025,
    textAlign: "center",
    width: width * 0.85,
  },
  viewTextInput: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    width: width * 0.85,
  },
  envelopeIcon: {
    backgroundColor: "#C4C4C4",
    height: height * 0.06,
    width: width * 0.15,
    paddingHorizontal: 12,
    paddingVertical: 13,
  },
  input: {
    backgroundColor: "#C4C4C4",
    color: "white",
    height: height * 0.06,
    width: width * 0.7,
    fontSize: height * 0.025,
    paddingHorizontal: 10,
  },
  viewButton: {
    flex: 2,
    alignItems: "center",
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: "#E3C000",
    height: height * 0.06,
    width: width * 0.85,
    alignItems: "center",
    justifyContent: "center",
  },
  textButton: {
    fontSize: height * 0.035,
    fontWeight: "bold",
  },
});
