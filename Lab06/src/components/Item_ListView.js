import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

export const Item_ListView = ({ navigation, item }) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(item.status === "done");
  false;

  const handleCheckBox = () => {
    setToggleCheckBox(!toggleCheckBox);
    item.status = toggleCheckBox ? "done" : "in-process";
  };
  return (
    <View style={styles.container}>
      <View style={styles.status}>
        <Pressable style={styles.checkBox} onPress={handleCheckBox}>
          {toggleCheckBox ? (
            <AntDesign name="checkcircle" size={24} color="green" />
          ) : (
            <AntDesign name="checkcircleo" size={24} color="gray" />
          )}
        </Pressable>
      </View>
      <View style={styles.TaskInfo}>
        <Text
          style={[
            styles.infoTitle,
            { textDecorationLine: toggleCheckBox ? "line-through" : "none" },
          ]}
        >
          {item.name}
        </Text>
        <View style={styles.info}>
          <Text style={styles.textInfo}>Time : {item.time}</Text>
          <Text style={styles.textInfo}>Status : {item.status}</Text>
        </View>
      </View>
      <View style={styles.edit}>
        <Pressable onPress={() => navigation.navigate("TaskHandle", { item })}>
          <AntDesign name="edit" size={24} color="red" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 8,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#d3d5d8",
    borderRadius: 20,
    shadowRadius: 10,
  },
  status: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  checkBox: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  TaskInfo: {
    width: 200,
    justifyContent: "center",
  },
  infoTitle: {
    fontSize: 22,
    fontWeight: "500",
  },
  info: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInfo: {
    fontSize: 16,
    fontWeight: "400",
    fontStyle: "italic",
    color: "gray",
  },

  edit: {
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
