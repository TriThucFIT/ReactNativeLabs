import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { TaskApi } from "../api/TaskList.api";
import {
  useRecoilState,
  useRecoilValueLoadable,
  useSetRecoilState,
} from "recoil";
import { taskActionSelector, taskActionState } from "../RecoilState";

const taskListAPI = new TaskApi();
export const Item_ListView = ({ navigation, item, onDelete }) => {
  const [taskAction, setTaskAction] = useRecoilState(taskActionState);
  const actionResult = useRecoilValueLoadable(taskActionSelector);

  const [toggleCheckBox, setToggleCheckBox] = useState(item.status);
  const handleCheckBox = () => {
    setToggleCheckBox(!toggleCheckBox);
    item.status = toggleCheckBox;
    taskListAPI.updateTask(item);
  };
  const handleDelete = () => {
    setTaskAction({
      action: "delete",
      task: item,
    });
  };
  useEffect(() => {
    const processTask = async () => {
      if (taskAction.action !== "none") {
        const result = await actionResult;
        if (result?.state === "hasValue") {
          setTaskAction({
            action: "none",
            task: null,
          });
          onDelete((prev) => prev.filter((task) => task.id !== item.id));
        }
      }
    };

    processTask();
  }, [taskAction, actionResult]);
  const handleEdit = () => {
    setTaskAction({
      action: "none",
      task: item,
    });
    navigation.navigate("TaskHandle");
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
          <Text style={styles.textInfo}>
            Time : {new Date(item.time).toLocaleDateString()}
          </Text>
          <Text style={styles.textInfo}>
            Status : {item.status ? "Done" : "In-Process"}
          </Text>
        </View>
      </View>
      <View style={styles.edit}>
        <Pressable onPress={handleEdit}>
          <AntDesign name="edit" size={24} color="orange" />
        </Pressable>
        <Pressable onPress={handleDelete}>
          <Feather name="delete" size={20} color="red" />
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
    flexDirection: "column",
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
    height: 80,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
