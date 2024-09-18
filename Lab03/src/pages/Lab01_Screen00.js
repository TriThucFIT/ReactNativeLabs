import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export const Screen00 = ({ navigation }) => {
  return (
    <LinearGradient colors={["#00CCF9", "#00CCF9"]} style={styles.container}>
      <View style={styles.circle} />
      <View style={styles.titleView}>
        <Text style={styles.title}>GROW</Text>
        <Text style={styles.title}>YOUR BUSINESS</Text>
      </View>
      <Text style={styles.subtitle}>
        We will help you to grow your business using online server
      </Text>

      <View style={styles.buttonView}>
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Screen02");
          }}
        >
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </Pressable>
      </View>

      <Pressable>
        <Text style={styles.howWeWork}>HOW WE WORK?</Text>
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  circle: {
    width: 150,
    height: 150,
    borderWidth: 15,
    borderRadius: 75,
    marginTop: 100,
  },
  titleView: {
    width: "100%",
    alignItems: "center",
    marginVertical: 150,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    width: "80%",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },
  buttonView: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#E3C000",
    paddingHorizontal: 50,
    paddingVertical: 20,
    marginBottom: 10,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  howWeWork: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});
