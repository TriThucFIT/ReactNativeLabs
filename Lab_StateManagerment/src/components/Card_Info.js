import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export const Card_Info = ({ info }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarView}>
        <Image
          source={{ uri: "https://picsum.photos/200" }}
          style={styles.avatar}
        />
      </View>
      <View style={styles.infoView}>
        <Text style={styles.infoTitle}>HI {info}</Text>
        <Text style={styles.infoSumary}>Have agrate day a head</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarView: {
    width: 50,
    height: 50,
    borderRadius: 30,
    overflow: "hidden",
  },
  avatar: {
    width: 50,
    height: 50,
  },
  infoView: {
    width: 200,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  infoSumary: {
    fontSize: 18,
    fontWeight: "600",
    color: "gray",
  },
});
