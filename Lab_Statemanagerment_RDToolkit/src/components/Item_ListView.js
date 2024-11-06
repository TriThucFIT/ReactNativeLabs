import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteProduct } from "../../redux-toolkit/slice";

export const Item_ListView = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
          {item.name}
        </Text>
        <Text style={styles.brand} numberOfLines={1} ellipsizeMode="tail">
          {item.price} VNĐ
        </Text>
        <Text
          style={[styles.brand, { fontStyle: "italic", color: "red" }]}
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {item.discount} % off
        </Text>
      </View>
      <Pressable style={styles.button} onPress={() => handleDelete(item.id)}>
        <Text
          style={{
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
          }}
        >
          Delete
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 20,
    borderBottomWidth: 1,
    shadowColor: "#000",
  },
  image: {
    width: 120,
    height: 120,
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
    marginVertical: 5,
  },
  button: {
    backgroundColor: "#F31111",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
  },
});
