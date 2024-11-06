import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export const Item_GridView = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
          {item.name}
        </Text>
        <Text style={styles.brand} numberOfLines={1} ellipsizeMode="tail">
          {item.brand}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 120
  },
  info: {
    marginLeft: 10,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    maxWidth: 150,
  },
  brand: {
    fontSize: 18,
    color: "#888",
  },
  button: {
    backgroundColor: "#F31111",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
  },
});
